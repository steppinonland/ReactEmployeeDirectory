# ReactEmployeeDirectory

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## How to sort a table in react:

  * We'll need to decide which columns we want to sort by

  * We'll need to figure out how to structure the employees data table

  * We need to create a handleSort function and a columns object like so:
   ``` 
handleSort = (field, order) => {
  this.setState({
    field,
    order
  });
}
const columns = [{
        dataField: 'column1name',
        text: 'Column 1 Heading Text',
        sort: true
        onSort: this.handleSort
      }, {
        dataField: 'column2name',
        text: 'Column 2 Heading Text',
        sort: true
        onSort: this.handleSort
      }, {
        dataField: 'column3name',
        text: 'Column 3 Heading Text'
      }];

  * I could set it up using a defaultSorted attribute, which will sort the table by some sort of default order. I don't think that's necessary here.
