import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/environment', (req, res, next) => {
    res.json(process.env.NODE_ENV);
});

export default router;