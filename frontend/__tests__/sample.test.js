describe('sample test 101', () => {
    it('works as expected', () => {
        expect(1).toEqual(1);
    });

    it('handles ranges just fine', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
    });
    // // Only executed this test (focus)
    // fit('makes a list of gods names',() => {
    //     const gods = ['snikcers', 'hugo'];
    //     expect(gods).toEqual(gods);
    //     expect(gods).toContain('snikcers');
    // });
    // // Will skip this text (x from skip)
    // xit('makes a list of gods names',() => {
    //     const gods = ['snikcers', 'hugo'];
    //     expect(gods).toEqual(gods);
    //     expect(gods).toContain('snikcers');
    // })
});