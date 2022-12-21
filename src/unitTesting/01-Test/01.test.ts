import {multi, splitIntoWords, sum} from "./01";


test ('sum should be correct', () => {

    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const resultSum1 = sum(a,b);
    const resultSum2 = sum(b, c);

    //expect result
    expect(resultSum1).toBe(3)
    expect(resultSum2).toBe(5)
})

test ('multi should be correct', () => {

    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const resultMulti1 = multi(a,b);
    const resultMulti2 = multi(b, c);

    //expect result
    expect(resultMulti1).toBe(2)
    expect(resultMulti2).toBe(6)
})

test ('splitting into words should be correct', () => {

    //data
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best programming language."

    //action
    const resultSplit1 = splitIntoWords(sent1)
    const resultSplit2 = splitIntoWords(sent2)

    //expect result sent1
    expect(resultSplit1.length).toBe(3)
    expect(resultSplit1[0]).toBe("hello")
    expect(resultSplit1[1]).toBe("my")
    expect(resultSplit1[2]).toBe("friend")
    //expect result sent2
    expect(resultSplit2.length).toBe(5)
    expect(resultSplit2[0]).toBe("js")
    expect(resultSplit2[1]).toBe("the")
    expect(resultSplit2[2]).toBe("best")
    expect(resultSplit2[3]).toBe("programming")
    expect(resultSplit2[4]).toBe("language")
})