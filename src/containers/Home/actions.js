import faker from 'faker';

export const HOME_GET = 'HOME_GET';

export function get(data) {

  let size = 50 + faker.random.number(50) // 50 <= size <= 100
  var a = {
    type: HOME_GET,
    columns: [{
      attribute: 'field_name',
      label: 'Name'
    }, {
      attribute: 'cultivation_id',
      label: 'Nummer'
    }, {
      attribute: 'company_name',
      label: 'Betrieb'
    }, {
      attribute: 'area_in_hectares',
      label: 'Fläche'
    }, {
      attribute: 'active',
      label: 'Aktiv'
    }, {
      attribute: 'crop_name',
      label: 'Kultur'
    }, {
      attribute: 'harvest_year',
      label: 'Ernte'
    }],
    data: Array(size).fill().map((_, i) => { return {
      field_name: faker.name.findName(),
      area_in_hectares: ( 1 + faker.random.number(20) ) / ( 1 + faker.random.number(20) ),
      active: faker.random.boolean,
      company_name: faker.company.companyName(),
      cultivation_id: i,
      crop_name: faker.name.findName(),
      harvest_year: 2000 + faker.random.number(18)
    }})
  }
  return a;
}