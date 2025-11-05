import { lookup } from "dns";
import util from "util";

const nsLookUp = util.promisify(lookup);

export default async function healthCheck(req, res) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      status: "Error",
      message: "URL is required for the Health Check",
    });
  } else {
    try {

    } catch (error) { }
  }
}
