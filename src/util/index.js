import faker from 'faker';

export function fakeData() {
  return {
    columns: [{
      attribute: 'field_name',
      label: 'Name'
    }, {
      attribute: 'cultivation_id',
      label: 'Number'
    }, {
      attribute: 'company_name',
      label: 'Company'
    }, {
      attribute: 'area_in_hectares',
      label: 'Area'
    }, {
      attribute: 'active',
      label: 'Aktive'
    }, {
      attribute: 'crop_name',
      label: 'Crop Name'
    }, {
      attribute: 'harvest_year',
      label: 'Year'
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