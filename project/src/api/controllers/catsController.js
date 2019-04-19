const express = require('express');
const { services, middleware } = require('../../services');

const catService = services.catService;

const router = express.Router();

router.get('/cats', async (req, res) => {
    try {
        const cats = await catService.getCats();
        res.json({ cats });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/cats/:id', async (req, res) => {
    try {
        const cat = await catService.getCatByID(req.params.id);

        if (!cat) return res.status(404).json({ error: 'The cat with the given ID was not found' });
        
        res.json({ cat });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/cats', async (req, res) => {
    try {
        const cat = await catService.createCat(req.body);
        res.json({ cat });
    } catch (error) {
        res.status(500).json({ error: error.message });       
    }
});

router.put('/cats/:id', async (req, res) => {
    try {
        const cat = await catService.updateCat(req.params.id, req.body);

        if (!cat) res.status(404).json({ error: 'The cat with the given ID was not found' });

        res.json({ cat });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/cats/:id', async (req, res) => {
    try {
        const cat = await catService.deleteCat(req.params.id);

        if (!cat) res.status(404).json({ error: 'The cat with the given ID was not found' });

        res.json({ cat });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;