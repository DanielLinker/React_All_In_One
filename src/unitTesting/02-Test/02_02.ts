
export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}


export type HousType = {
    buildetAt: number
    repaired: false
    address: AddressType


}

export type GovermentBuildingType = {
    type: 'HOSPITAL' | 'FIRE - STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousType>
    govermentBuilding: Array<GovermentBuildingType>
    citizensNumber: number
}