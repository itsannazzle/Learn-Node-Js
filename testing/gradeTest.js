const averageExam = (valueExam) => {
    const numberValidation = valueExam.every(exam => typeof exam === 'number');
    if(!numberValidation) 
    throw Error('Enter a number!');

    const sumValues = valueExam.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
    return sumValues/valueExam.length;
};

const isPassed = (valueExam, name) => {
    const minValue = 75;
    const average = averageExam(valueExam);

    if(average >= minValue){
        console.log(`Student ${name} paseed!`);
        return true;
    } else {
        console.log(`Student ${name} study harder!`);
        return false;
    }
};
const arrScore = [80,100,80];
const check = isPassed(arrScore,"Anna");
console.log(check);

module.exports = { averageExam, isPassed };