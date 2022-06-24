const express = require("express")

const controller = require("../controllers/livroController")

const router = express.Router()

router.get("/", controller.allFindEbooks)

router.get("/", controller.findOneByAuthorName)

router.get("/:id", controller.findById)

router.get("/", controller.findOneByAuthorName)

module.exports = router
