describe('randomNumber',function(){
    it('should get value less than 100',function(){
        chai.expect(randomNumber()).to.be.at.most(100);
    })
})
describe('OrderContent',function(){
    it('should be of a numeric type',function()
    {
        chai.assert(randomNumber(),"isnumberofunits");
    })
})