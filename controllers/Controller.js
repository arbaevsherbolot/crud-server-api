const db = require("../connections/db");

const controller = {
  postNewSkill: async (req, res) => {
    const { skill } = req.body;

    try {
      await db("skills").insert({
        skill: skill,
      });

      res.status(201).json({ message: "Skill added successfully!" });
    } catch {
      res.status(401).json({ error: "ERROR: Skill added unsuccessfully" });
    }
  },

  getAllSkills: async (req, res) => {
    try {
      const allSkills = await db("skills");
      const lastSkill = allSkills[allSkills.length - 1].skill;

      res.status(201).json({ message: allSkills });
    } catch {
      res.status(401).json({ error: "No data" });
    }
  },

  getSkillById: async (req, res) => {
    try {
      const { id } = req.params;
      const skill = await db("skills").where({ id: id });

      res.status(201).json({ message: skill });
    } catch {
      res.status(401).json({ error: "No data" });
    }
  },

  updateSkillById: async (req, res) => {
    try {
      const { id } = req.params;
      const { skill } = req.body;

      await db("skills").where({ id: id }).update({ skill: skill });

      const updatedSkill = await db("skills").where({ id: id });

      res.status(201).json({ message: updatedSkill });
    } catch {
      res.status(401).json({ error: "ERROR: Skill updated unsuccessfully!" });
    }
  },

  deleteSkillById: async (req, res) => {
    try {
      const { id } = req.params;

      await db("skills").del().where({ id: id });

      res.status(201).json({ message: "Skill deleted successfully!" });
    } catch {
      res.status(401).json({ error: "ERROR: Skill deleted unsuccessfully!" });
    }
  },
};

module.exports = controller;
