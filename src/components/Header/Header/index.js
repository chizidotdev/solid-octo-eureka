import React from "react";

import { Row, Img, Input, Stack } from "@components/index";
import { CloseSVG } from "../../../assets/images/index.js";

const Header = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 w-[100%] items-center lg:px-[21px] xl:px-[26px] 2xl:px-[30px] 3xl:px-[36px]">
          <Row className="w-[100%] items-center justify-between">
            <Img
              src="images/img_starrhendalog_purple_900.svg"
              className="w-[11%] lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
              alt="starrhendalog"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="w-[100%] p-[0] font-poppins font-normal not-italic text-gray_901 placeholder:text-gray_901 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]"
              wrapClassName="flex w-[63%]"
              name="searchbar"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="my-[auto] cursor-pointer lg:ml-[10px] lg:mr-[6px] lg:h-[13px] lg:w-[12px] xl:ml-[13px] xl:mr-[8px] xl:h-[17px] xl:w-[16px] 2xl:ml-[15px] 2xl:mr-[9px] 2xl:h-[19px] 2xl:w-[18px] 3xl:ml-[18px] 3xl:mr-[10px] 3xl:h-[22px] 3xl:w-[21px]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="my-[auto] cursor-pointer lg:ml-[7px] lg:mr-[15px] lg:h-[13px] lg:w-[12px] xl:ml-[8px] xl:mr-[19px] xl:h-[17px] xl:w-[16px] 2xl:ml-[10px] 2xl:mr-[22px] 2xl:h-[19px] 2xl:w-[18px] 3xl:ml-[12px] 3xl:mr-[26px] 3xl:h-[22px] 3xl:w-[21px]"
                    onClick={() => setInputvalue("")}
                    color="#262626"
                  />
                ) : inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#262626"
                    className="my-[auto] cursor-pointer lg:ml-[7px] lg:mr-[15px] lg:h-[13px] lg:w-[12px] xl:ml-[8px] xl:mr-[19px] xl:h-[17px] xl:w-[16px] 2xl:ml-[10px] 2xl:mr-[22px] 2xl:h-[19px] 2xl:w-[18px] 3xl:ml-[12px] 3xl:mr-[26px] 3xl:h-[22px] 3xl:w-[21px]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcCircleBorder30"
              size="smSrc"
              variant="srcOutlineBluegray800"
            ></Input>
            <Stack className="px-[1px] lg:h-[43px] lg:w-[42px] xl:h-[54px] xl:w-[53px] 2xl:h-[61px] 2xl:w-[60px] 3xl:h-[73px] 3xl:w-[72px]">
              <Img
                src="images/img_image2022032.png"
                className="userOne inset-[0] m-[auto] justify-center"
                alt="IMAGE2022032"
              />
            </Stack>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
