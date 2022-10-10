// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
   console.log('request ', JSON.stringify(req.data))
   res.status(200).json({ name: 'what Doe' })
}
