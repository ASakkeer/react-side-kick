import React, { useState, useEffect, useRef } from "react";

import "./styles/Signup.css"; // Create a new CSS file for your signup screen styles
import {
  View,
  Text,
  HeaderText,
  TextInput,
  Button,
  Link,
} from "../../components";

function Signup() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const SPACING = 10;
    const ITERATIONS = 14;
    const MOUSE = 25;
    let GRAVITY = 0.0005;
    let SPEED = 1;

    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");

    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const mouse = {
        x: 0,
        y: 0,
        px: 0,
        py: 0,
        points: [],
      };

      const clamp = function (val, min, max) {
        return Math.min(Math.max(val, min), max);
      };

      class Vector {
        constructor(x = 0, y = 0) {
          this.x = x;
          this.y = y;
        }

        get length() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }

        add(v) {
          const p = v instanceof Vector;
          this.x += p ? v.x : v;
          this.y += p ? v.y : v;
          return this;
        }

        sub(v) {
          const p = v instanceof Vector;
          this.x -= p ? v.x : v;
          this.y -= p ? v.y : v;
          return this;
        }

        mul(v) {
          const p = v instanceof Vector;
          this.x *= p ? v.x : v;
          this.y *= p ? v.y : v;
          return this;
        }

        scale(x) {
          this.x *= x;
          this.y *= x;
          return this;
        }

        normalize() {
          const len = this.length;
          if (len > 0) {
            this.x /= len;
            this.y /= len;
          }

          return this;
        }

        distance(v) {
          const x = this.x - v.x;
          const y = this.y - v.y;
          return Math.sqrt(x * x + y * y);
        }

        static add(v1, v2) {
          const v = v2 instanceof Vector;
          return new Vector(v1.x + (v ? v2.x : v2), v1.y + (v ? v2.y : v2));
        }

        static sub(v1, v2) {
          const v = v2 instanceof Vector;
          return new Vector(v1.x - (v ? v2.x : v2), v1.y - (v ? v2.y : v2));
        }

        static mul(v1, v2) {
          const v = v2 instanceof Vector;
          return new Vector(v1.x * (v ? v2.x : v2), v1.y * (v ? v2.y : v2));
        }

        static dot(v1, v2) {
          return v1.x * v2.x + v1.y * v2.y;
        }
      }

      const reactor = function (a, b, p) {
        const refA = Vector.add(a.toWorld(p), a.pos);
        const refB = Vector.add(b.toWorld(Vector.mul(p, -1)), b.pos);

        const diff = Vector.sub(refB, refA);
        const mid = Vector.add(refA, Vector.mul(diff, 0.5));

        const t = clamp(b.p - a.p, -Math.PI, Math.PI);
        a.torque += t;
        b.torque -= t;

        const mfc = 0.04;
        const tfc = 0.02;
        const mf = Vector.mul(diff, mfc);
        const tf = Vector.mul(diff, tfc);
        const dm = Vector.sub(b.vat(mid), a.vat(mid));
        mf.add(Vector.mul(dm, mfc));
        tf.add(Vector.mul(dm, tfc));

        a.addForce(mf, mid);
        b.addForce(Vector.mul(mf, -1), mid);
        a.addTorque(tf, mid);
        b.addTorque(Vector.mul(tf, -1), mid);
      };

      const allContraints = [];

      class Point {
        constructor(pos, square) {
          this.pos = pos;
          this.velocity = new Vector();
          this.force = new Vector();

          this.p = 0;
          this.w = 0;
          this.torque = 0;
          this.square = square;
        }

        update() {
          this.velocity.add(Vector.mul(this.force, SPEED));

          this.force = new Vector(0, GRAVITY / ITERATIONS);

          this.pos.add(Vector.mul(this.velocity, SPEED));

          const qPI = Math.PI / 4;
          this.w += this.torque / ((SPACING / 2) ** 2 / 2);
          this.w = clamp(this.w * SPEED, -qPI, qPI);

          this.p += this.w;
          this.torque = 0;

          mouse.points.includes(this) && this.moveTo(mouse, this.mouseDiff);
        }

        toWorld(input) {
          return new Vector(
            -input.y * Math.sin(this.p) + input.x * Math.cos(this.p),
            input.y * Math.cos(this.p) + input.x * Math.sin(this.p)
          );
        }

        vat(R) {
          const dr = Vector.sub(R, this.pos);
          const vdr = this.w * dr.length;

          dr.normalize();

          return Vector.add(this.velocity, new Vector(vdr * -dr.y, vdr * dr.x));
        }

        addForce(F) {
          this.force.add(F);
        }

        addTorque(F, R) {
          const arm = Vector.sub(R, this.pos);
          const torque = F.y * arm.x - F.x * arm.y;
          this.torque += torque;
        }

        moveTo(v, offset) {
          const targetX = v.x + offset.x;
          const targetY = v.y + offset.y;
          const strength = 0.001;
          this.velocity.x += (targetX - this.pos.x) * strength * SPEED;
          this.velocity.y += (targetY - this.pos.y) * strength * SPEED;
          this.velocity.mul(0.99);
        }
      }

      class Square {
        constructor(width, height, spacing, hue) {
          this.width = width;
          this.height = height;
          this.spacing = spacing;
          this.hue = hue;

          const yOff =
            200 + Math.random() * (canvas.height - 300 - height * SPACING);
          const xOff =
            10 + Math.random() * (canvas.width - 10 - width * SPACING);

          const w = -0.5 + Math.random();

          this.points = Array(width * height)
            .fill(0)
            .map((_, i) => {
              const x = i % width;
              const y = ~~(i / width);

              const p = new Point(
                new Vector(
                  xOff + x * spacing,
                  canvas.height - yOff + y * spacing
                ),
                this
              );

              p.w = w;

              return p;
            });

          this.points.forEach((point, i) => {
            const x = i % width;
            const y = ~~(i / width);

            if (x > 0) {
              allContraints.push([
                this.points[i - 1],
                point,
                new Vector(SPACING / 2, 0),
              ]);
            }

            if (y > 0) {
              allContraints.push([
                this.points[i - width],
                point,
                new Vector(0, SPACING / 2),
              ]);
            }
          });

          this.drawPoints = [];

          for (let i = 0; i < width; i++) {
            this.drawPoints.push(this.points[i].pos);
          }

          for (let i = 0; i < height; i++) {
            this.drawPoints.push(this.points[width - 1 + width * i].pos);
          }

          for (let i = width - 1; i > -1; i--) {
            this.drawPoints.push(this.points[(height - 1) * width + i].pos);
          }

          for (let i = height - 1; i > -1; i--) {
            this.drawPoints.push(this.points[width * i].pos);
          }
        }

        draw(ctx) {
          const { drawPoints, hue } = this;

          ctx.lineWidth = 2;
          ctx.fillStyle = `hsla(${hue}, 90%, 80%, 0.8)`;
          ctx.strokeStyle = `hsla(${hue}, 90%, 70%, 0.8)`;

          ctx.beginPath();
          ctx.moveTo(drawPoints[0].x, drawPoints[0].y);

          drawPoints.forEach((point, i) => {
            i && ctx.lineTo(point.x, point.y);
          });

          ctx.lineTo(drawPoints[0].x, drawPoints[0].y);
          ctx.stroke();
          ctx.fill();
        }
      }

      const hue = Math.random() * 360;
      const squares = Array(10)
        .fill(0)
        .map((_, i) => {
          const size = 5;
          return new Square(size, size, SPACING, hue + i * 20);
        });

      const allPoints = [].concat(...squares.map(({ points }) => points));

      const update = function () {
        const { width, height } = canvas;

        ctx.clearRect(0, 0, width, height);

        let i = ITERATIONS;
        while (i--) {
          allContraints.forEach((con, i) => {
            reactor(...con, i);
          });

          allPoints.forEach((point, i) => {
            const { square } = point;

            const damping = 0.6;
            const spacing = (square ? square.spacing : SPACING) / 2;

            if (point.pos.x < spacing) {
              point.force.add(new Vector((spacing - point.pos.x) * 1, 0));
              point.velocity.y *= damping;
            } else if (point.pos.x > canvas.width - spacing) {
              point.force.add(
                new Vector((point.pos.x - canvas.width + spacing) * -1, 0)
              );
              point.velocity.y *= damping;
            }

            if (point.pos.y < spacing) {
              point.force.add(new Vector(0, (spacing - point.pos.y) * 1));
              point.velocity.x *= damping;
            } else if (point.pos.y > canvas.height - spacing) {
              point.force.add(
                new Vector(0, (point.pos.y - canvas.height + spacing) * -1)
              );
              point.velocity.x *= damping;
            }

            point.update();
          });
        }

        squares.forEach((s) => {
          s.draw(ctx);
        });

        if (mouse.down) {
          ctx.fillStyle = "rgba(0, 0, 100, 0.03)";
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, MOUSE, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, SPACING, 0, Math.PI * 2);
          ctx.fill();
        }

        mouse.px = mouse.x;
        mouse.py = mouse.y;

        window.requestAnimationFrame(update);
      };

      update();

      const setMouse = (e) => {
        e = e.touches ? e.touches[0] : e;
        const rect = canvas.getBoundingClientRect();
        mouse.px = mouse.x;
        mouse.py = mouse.y;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };

      canvas.onmousedown = canvas.ontouchstart = (e) => {
        setMouse(e);
        mouse.down = true;

        for (const point of allPoints) {
          if (
            point.pos.distance(mouse) < MOUSE &&
            !mouse.points.includes(point)
          ) {
            mouse.points.push(point);
            point.mouseDiff = Vector.sub(
              point.pos,
              new Vector(mouse.x, mouse.y)
            );
            point.velocity.mul(0);
            point.force.mul(0);
          }
        }
      };

      canvas.onmouseup = canvas.ontouchend = () => {
        mouse.points = [];
        mouse.down = false;
      };

      canvas.onmousemove = canvas.ontouchmove = setMouse;
    }

    // window.onkeydown = ({ keyCode }) => {
    //   if (keyCode === 49) {
    //     SPEED = 0.2;
    //   } else if (keyCode === 50) {
    //     GRAVITY = 0;
    //   } else if (keyCode === 51) {
    //     GRAVITY = -0.05;
    //   }
    // };
    // window.onkeyup = ({ keyCode }) => {
    //   if (keyCode === 49) {
    //     SPEED = 1;
    //   } else if (keyCode === 50) {
    //     GRAVITY = 0.05;
    //   } else if (keyCode === 51) {
    //     GRAVITY = 0.05;
    //   }
    // };

    // Clean up event listeners when the component unmounts
    return () => {
      if (canvas) {
        canvas.onmousedown = canvas.ontouchstart = null;
        canvas.onmouseup = canvas.ontouchend = null;
        canvas.onmousemove = canvas.ontouchmove = null;
      }
      //   window.onkeydown = null;
      //   window.onkeyup = null;
    };
  }, []);
  // State variables for user username, email, password, and confirm password
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to update the user's username input
  const _updateUsername = (username) => {
    setUsername(username.target.value || "");
  };

  // Function to update the user's email input
  const _updateEmail = (email) => {
    setUserEmail(email.target.value || "");
  };

  // Function to update the user's password input
  const _updatePassword = (password) => {
    setUserPassword(password.target.value || "");
  };

  // Function to update the user's confirm password input
  const _updateConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword.target.value || "");
  };

  // Function to handle the signup process
  const handleSignup = () => {
    // Add your signup logic here, e.g., sending data to a server
    console.log("Signing up...");
  };

  return (
    <View className="account-pages _lg_container">
      {/* <canvas className="_jelly" ref={canvasRef}></canvas> */}
      <View className="container _container">
        <View className="justify-content-center row h-full">
          <View className="col-md-8 col-lg-6 col-xl-5 signup_c">
            {/* Update the class name */}
            {/* Welcome message */}
            <View className="text-center">
              <HeaderText
                text="Create an Account!"
                level={3}
                className="lg_title"
              />{" "}
              {/* Update the title */}
              <Text text="Sign up to join Chax" />
            </View>
            {/* Signup form */}
            <View className="card white_container">
              <View className="p-4 card-body">
                <View className="p-3">
                  {/* Username input field */}
                  <TextInput
                    placeholder="Username"
                    value={username}
                    onChange={_updateUsername}
                  />
                  {/* Email input field */}
                  <TextInput
                    placeholder="Email"
                    value={userEmail}
                    onChange={_updateEmail}
                  />
                  {/* Password input field */}
                  <TextInput
                    placeholder="Password"
                    type="password"
                    value={userPassword}
                    onChange={_updatePassword}
                  />
                  {/* Confirm Password input field */}
                  <TextInput
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={_updateConfirmPassword}
                  />
                  {/* Signup button */}
                  <Button
                    className="lg_btn" // You can customize the class name
                    disabled={
                      !username ||
                      !userEmail ||
                      !userPassword ||
                      userPassword !== confirmPassword
                    }
                    onClick={handleSignup}
                  >
                    <Text text="Sign Up" />
                  </Button>
                </View>
              </View>
            </View>
            {/* Additional text */}
            <View className="text-center _lg_no_ac_c">
              <Text text={`Already have an account? `} />{" "}
              <Text text="Login" className="lg_cre_btn" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Signup;
