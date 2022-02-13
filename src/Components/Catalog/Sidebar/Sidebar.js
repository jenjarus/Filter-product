import React from "react";
import FilterPrice from "./FilterPrice";
import Filter from "./Filter";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <FilterPrice />
            <Filter
                title={"Размер"}
                nameClassComp={"size"}
                nameFilter={"RAZMER"}
                open={true}
            />
            <Filter
                title={"Цвет"}
                nameClassComp={"color"}
                nameFilter={"TSVET"}
                open={true}
            />
            <Filter
                title={"Материал"}
                nameClassComp={"material"}
                nameFilter={"MATERIAL"}
            />
        </div>
    )
};

export default Sidebar;
