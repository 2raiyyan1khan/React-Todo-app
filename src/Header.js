import React from 'react';

const Header = ({length}) => {
    return (<h4 className="bg-warning text-center text-white p-3  ">Todo List ({length} to do items)</h4>
    );
}

export default Header;