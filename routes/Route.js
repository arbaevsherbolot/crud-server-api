const router = require("express").Router();
const controller = require("../controllers/Controller");

router.post("/skills", controller.postNewSkill);

router.get("/skills", controller.getAllSkills);
router.get("/skills/:id", controller.getSkillById);

router.put("/skills/:id", controller.updateSkillById);

router.delete("/skills/:id", controller.deleteSkillById);

module.exports = router;
