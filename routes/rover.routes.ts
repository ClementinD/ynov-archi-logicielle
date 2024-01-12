import { Router, Request, Response, NextFunction } from "express";

module.exports = (app: any, interpreter: any) => {
  const router = Router();

  router.post("/", (req: Request, res: Response) => {
    console.log(interpreter.rover.position.value());
    interpreter.interpretCommand(req.body.command);
    console.log(interpreter.rover.position.value());

    res.json({ position: interpreter.rover.position.value() });
  });

  app.use("/api/rover", router);
};
