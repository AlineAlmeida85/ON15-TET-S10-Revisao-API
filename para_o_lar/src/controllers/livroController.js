const livrosModel = require("../models/estabelecimento.json")

const allFindEbooks = (req, res) => {
    res.status(200).json({
        "Mensagem": "Retornando todos os Livros",
        "Livros": livrosModel
    })
}

const findById = (req, res) => {
    const id = request.params.id

try {
    const findEbook = livrosModel.find(livro => livro.id == id)
    if(!findEbook) {
        throw new Error (`Livro ${id} não Encontrado!`)            
        }
        res.status(200).json(findEbook)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            "message": "Poxa... Desculpe! Ainda não temos esse Livro",
            "details": error.mensage
        })
    }
}

const findOneByAuthorName = (req, res) => {
    const { authorName } = req.query

    try{
        if(!authorName) throw new Error("Nenhum parametro inserido para realizar a busca!")

        const findEbook = livrosModel.find(currentEbook => currentEbook.nome == authorName)

        if(!findEbook) throw new Error (`Autor ${authorName} não Encontrado!`)

        res.status(200).json(findEbook)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            "message": "Desculpe, ainda não temos livros desse Autor!",
            "details": error.mensage
        })
    }
}

module.exports = {
    allFindEbooks,
    findById,
    findOneByAuthorName
}