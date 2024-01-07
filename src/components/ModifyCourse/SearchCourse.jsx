const Search = (searchText,sections) => {


    let filteredList = sections.filter(section => section.courseCode.toLowerCase() === searchText.toLowerCase());
   
    let filteredList2 = sections.filter(section => section.empShortName.toLowerCase() === searchText.toLowerCase());
    filteredList2.length>0 && filteredList.push(...filteredList2);
 
    return filteredList;
   
}

export default Search;