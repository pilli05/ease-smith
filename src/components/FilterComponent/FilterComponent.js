import React from "react";
import { filterList } from "../../constant/filterList";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const FilterComponent = ({ open }) => {
  return (
    <div
      className={
        open
          ? "block md:hidden col-span-3 px-5 py-3 bg-[#F0FFE5] space-y-3"
          : "hidden md:block col-span-3 px-5 py-3 bg-[#F0FFE5] space-y-3"
      }
    >
      <div className="font-[600] flex items-center justify-between  text-base text-[#6E6E6E] border-b-2 border-b-[#A8A8A8] pb-3 pt-3">
        <span>Filter</span>
        <span>Clear All</span>
      </div>
      {filterList && filterList.length > 0
        ? filterList.map((filter) => (
            <Accordion
              key={filter.id}
              sx={{
                boxShadow: "none",
                border: "none",
                "&:before": {
                  display: "none",
                },
                color: "#6E6E6E",
                borderBottom:
                  filter.name === "Light Efficient"
                    ? "none"
                    : "2px solid #A8A8A8",
              }}
            >
              <AccordionSummary
                expandIcon={filter.expand}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  backgroundColor: "#F0FFE5",
                  fontSize: "16px",
                  paddingLeft: "0px",
                }}
              >
                {filter.name}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#F0FFE5",
                }}
              >
                <ul className="space-y-2">
                  <li>
                    <div className="flex justify-between items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Lorem Ipsum (12)</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Lorem Ipsum (23)</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Lorem Ipsum (41)</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Lorem Ipsum (9)</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Lorem Ipsum (15)</span>
                    </div>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          ))
        : null}
    </div>
  );
};

export default FilterComponent;
