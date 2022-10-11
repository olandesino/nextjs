// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
   res.status(200).json(JSON.stringify(req.body))
//    res.status(200).json({ name: 'what Doe' })
}
