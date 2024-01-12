import { Router, Request, Response, NextFunction } from "express";

module.exports = (app: any, interpreter: any) => {
  const router = Router();

  router.post("/", (req: Request, res: Response) => {
    const commandes = req.body.command;
    commandes.forEach((commande: Array<String>) => {
      interpreter.interpretCommand(commande);
    });

    res.json({ position: interpreter.rover.position.value() });
  });

  app.use("/api/rover", router);
};
