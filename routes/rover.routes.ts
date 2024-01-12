import { Router, Request, Response, NextFunction } from "express";

module.exports = (app: any, interpreter: any) => {
  const router = Router();

  router.post("/", (req: Request, res: Response) => {
    console.log(interpreter.rover.position.value());

    const commandes = req.body.command;
    commandes.forEach((commande: Array<String>) => {
      interpreter.interpretCommand(commande);
    });

    console.log(interpreter.rover.position.value());

    res.json({ position: interpreter.rover.position.value() });
  });

  app.use("/api/rover", router);
};
