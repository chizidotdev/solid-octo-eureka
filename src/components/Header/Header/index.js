import React from "react";

import { Row, Img, Input, Stack } from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const Header = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 items-center lg:px-[21px] xl:px-[26px] 2xl:px-[30px] 3xl:px-[36px] w-[100%]">
          <Row className="items-center justify-between w-[100%]">
            <Img
              src="images/img_starrhendalog_purple_900.svg"
              className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[11%]"
              alt="starrhendalog"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal font-poppins not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_901 text-gray_901 w-[100%]"
              wrapClassName="flex w-[63%]"
              name="searchbar"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[10px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:ml-[13px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[15px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[18px] 3xl:mr-[10px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[15px] xl:w-[16px] xl:h-[17px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                    color="#262626"
                  />
                ) : inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#262626"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[15px] xl:w-[16px] xl:h-[17px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
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
            <Stack className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] px-[1px] lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]">
              <Img
                src="images/img_image2022032.png"
                className="inset-[0] justify-center m-[auto] userOne"
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
