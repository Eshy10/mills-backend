
const router = express.Router();
const MillsController = require('../controllers/millController');

router.get('/', MillsController.getAllMills);

module.exports = router;