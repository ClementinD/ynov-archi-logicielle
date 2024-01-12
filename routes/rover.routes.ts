import { Router, Request, Response, NextFunction } from "express";

import { Interpreter } from "../Topologie/Interpreter";

module.exports = (app: any, rover: any) => {
  const router = Router();
  const interpreter = new Interpreter(rover);

  router.post("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(interpreter.rover.position.getPosition());
    if (interpreter.checkCommand(req.body.command)) {
      interpreter.interpretCommand(req.body.command);
    }
    console.log(interpreter.rover.position.getPosition());
    res.json({ message: "Rover is moving" });
  });

  app.use("/api/rover", router);
};
