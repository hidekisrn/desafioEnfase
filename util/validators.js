module.exports.validateQuestionInput = (
    questionBody
) => {
    const errors = {};

    if (questionBody.trim() === ''){
        errors.questionBody = 'A questão necessita de um enunciado';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateAlternativeInput = (
    alternativeBody
) => {
    const errors = {};

    if(alternativeBody.trim() === ''){
        errors.alternativeBody = 'A alternativa necessita de um enunciado';
    }

    return{
        errors,
        valid: Object.keys(errors).length < 1
    };
};