// import React from "react";
// import PropTypes from "prop-types";

// class SearchForm extends React.Component {
//   updateSearchInput(e) {
//     const val = e.target.value;
//     this.setState({
//       searchText: val,
//     });
//     SearchForm.propTypes = {
//       onSubmit: PropTypes.func.isRequired,
//       searchVisible: PropTypes.bool,
//     };
//     SearchForm.defaultProps = {
//       onSubmit: () => {},
//       searchVisible: false,
//     };
//   }
//   submitForm(event) {
//     event.preventDefault();
//     // call the callback with the search value
//     this.props.onSubmit(this.state.searchText);
//   }

//   render() {
//     const { searchVisible } = this.state;
//     let searchClasses = ["searchInput"];
//     if (searchVisible) {
//       searchClasses.push("active");
//     }
//     return (
//       <form>
//         <input
//           type="search"
//           className={searchClasses.join(" ")}
//           onChange={this.updateSearchInput.bind(this)}
//           placeholder="Search ..."
//         />
//       </form>
//     );
//   }
// }

// export default SearchForm;
