import { Response, Request } from "express";
import renderToString from "../utils/renderToString";

const HomeController = {
  index: async (req: Request, res: Response) => {
    return res.send(renderToString(req.url));
  },
  about: async (req: Request, res: Response) => {
    return res.send(renderToString(req.url));
  },
  helloWorld: async (req: Request, res: Response) => {
    return res.json({
      message: "We're home",
    });
  },
};

export default HomeController;
