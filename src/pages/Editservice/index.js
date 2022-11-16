import React from "react";

import { Column, Text, Row, Stack, Img, SelectBox, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const EditservicePage = () => {
  const navigate = useNavigate();

  function handleNavigate42() {
    navigate("/users");
  }
  function handleNavigate43() {
    navigate("/services");
  }
  function handleNavigate44() {
    navigate("/settings");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
        <Column className="justify-start lg:mb-[206px] xl:mb-[258px] 2xl:mb-[291px] 3xl:mb-[349px] w-[97%]">
          <Header className="w-[100%]" />
          <Column className="font-inter justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[56%]">
            <Text className="columneditservice" as="h3" variant="h3">
              Edit Service
            </Text>
            <Row className="items-start justify-between lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
              <Column className="items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[11%]">
                <Stack className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                  <Img src="images/img_home.svg" className="home" alt="home" />
                </Stack>
                <Stack className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                  <Img src="images/img_user.svg" className="home" alt="user" />
                </Stack>
                <Stack
                  className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  onClick={handleNavigate43}
                >
                  <Img src="images/img_grid.svg" className="home" alt="grid" />
                </Stack>
                <Stack
                  className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  onClick={handleNavigate44}
                >
                  <Img
                    src="images/img_settings.svg"
                    className="home"
                    alt="settings"
                  />
                </Stack>
              </Column>
              <Column className="justify-start pt-[4px] w-[46%]">
                <Column className="justify-start w-[69%]">
                  <Text className="columnrole" variant="body1">
                    Role
                  </Text>
                  <SelectBox
                    className="font-normal lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_901 tracking-ls1 w-[100%]"
                    placeholderClassName="text-gray_901"
                    name="DropdownMenu"
                    placeholder="Admin"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_bluegray_300.svg"
                        className="lg:w-[17px] lg:h-[18px] lg:mr-[11px] xl:w-[21px] xl:h-[22px] xl:mr-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[19px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </Column>
                <Button
                  className="common-pointer font-medium lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray-300 tracking-ls1 w-[100%]"
                  onClick={handleNavigate42}
                  size="md"
                >
                  Update
                </Button>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EditservicePage;
