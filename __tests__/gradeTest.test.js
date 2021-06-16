const { averageExam, isPassed } = require('../testing/gradeTest');

test('should return exact average', () =>{
    const valueExamList = [80,100,100,80];
    expect(averageExam(valueExamList)).toEqual(90);
})

test('should handle non number', () => {
    const valueExamList = [89,'a',19];
    expect(() => averageExam(valueExamList)).toThrow();
})

describe('grade calculation', () => {
    test('should return exact average', () =>{
        const valueExamList = [80,100,100,80];
        expect(averageExam(valueExamList)).toEqual(90);
    })

    // integration test

    test('should return exam passed status', () => {
        const valueExamList = [100,100,100];
        expect(isPassed(valueExamList,"Anna")).toEqual(true);
    })

    test('should return exam failed status', () => {
        const valueExamList = [0,0,10];
        expect(isPassed(valueExamList,"Anna")).toEqual(false);
    })
})