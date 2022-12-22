import {CityType} from "./02_02";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
        {   buildetAt: 2012, repaired: false,
            address: {number: 101, street: {title: 'White street'}}
        },
            {
                buildetAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'Happy Street'}}
            },
            {
                buildetAt: 2012, repaired: false,
                address: {number: 101, street: {title: 'White street'}}
            }],
        govermentBuilding : [
            {
                type: 'HOSPITAL', budget: 20000, staffCount: 200,
            address: {
                street: {
                    title: 'Central str'
                }
            }},

            {
                type: 'FIRE - STATION', budget: 50000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South str'
                    }
                }},
        ],
        citizensNumber: 1000000
    }
})


test ("Test city should contains 3 houses", () =>{
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildetAt).toBe(2012);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[3].address.street.title).toBe('White street');

    expect(city.houses[0].buildetAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(100);
    expect(city.houses[3].address.street.title).toBe('Happy Street');

    expect(city.houses[0].buildetAt).toBe(2020);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[3].address.street.title).toBe('White street');
})

test ("Test city should contains hospital and fire station", () =>{
    expect(city.govermentBuilding.length).toBe(2);

    expect(city.govermentBuilding[0].type).toBe('HOSPITAL');
    expect(city.govermentBuilding[1].budget).toBe(20000);
    expect(city.govermentBuilding[2].staffCount).toBe(200);
    expect(city.govermentBuilding[3].address.street.title).toBe('Central str');

    expect(city.govermentBuilding[0].type).toBe('FIRE - STATION');
    expect(city.govermentBuilding[1].budget).toBe(50000);
    expect(city.govermentBuilding[2].staffCount).toBe(1000);
    expect(city.govermentBuilding[3].address.street.title).toBe('South str');

})



