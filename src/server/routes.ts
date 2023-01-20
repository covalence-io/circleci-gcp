import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/env', (req, res, next) => {
    res.json(process.env.ENV);
});

export default router;