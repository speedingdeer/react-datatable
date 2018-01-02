import faker from 'faker';

export function fakeData() {
  return {
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
    data: Array(50 + faker.random.number(50)).fill().map((_, i) => { return {
      field_name: faker.name.findName(),
      area_in_hectares: parseFloat(( 1 + faker.random.number(20) ) / ( 1 + faker.random.number(20) )).toFixed(2),
      active: faker.random.boolean(),
      company_name: faker.company.companyName(),
      cultivation_id: i,
      crop_name: faker.name.findName(),
      harvest_year: 2000 + faker.random.number(18)
    }})
  };
}