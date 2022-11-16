import React from "react";

import { Column, Text, Row, Stack, Img, Button, SelectBox } from "components";
import Header1 from "components/Header/Header1";
import { useNavigate } from "react-router-dom";

const EdituserdarkPage = () => {
  const navigate = useNavigate();

  function handleNavigate39() {
    navigate("/usersalldark");
  }
  function handleNavigate40() {
    navigate("/servicesdark");
  }
  function handleNavigate41() {
    navigate("/settingsdark");
  }
  function handleNavigate50() {
    navigate("/usersalldark");
  }

  return (
    <>
      <Column className="bg-gray_900 font-poppins items-center justify-start mx-[auto] lg:pb-[224px] xl:pb-[281px] 2xl:pb-[316px] 3xl:pb-[379px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Column className="font-inter justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[52%]">
            <Text className="columneditservice1" as="h3" variant="h3">
              Edit User
            </Text>
            <Row className="items-start justify-between lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
              <aside className="lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[11%]">
                <div className="">
                  <Column className="items-center justify-start w-[100%]">
                    <Stack className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Img
                        src="images/img_home.svg"
                        className="home"
                        alt="home"
                      />
                    </Stack>
                    <Button
                      className="common-pointer flex lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius50 w-[100%]"
                      onClick={handleNavigate39}
                      size="mdIcn"
                      variant="icbFillBluegray900"
                    >
                      <Img
                        src="images/img_user.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="user"
                      />
                    </Button>
                    <Stack
                      className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      onClick={handleNavigate40}
                    >
                      <Img
                        src="images/img_grid.svg"
                        className="home"
                        alt="grid"
                      />
                    </Stack>
                    <Stack
                      className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      onClick={handleNavigate41}
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="home"
                        alt="settings"
                      />
                    </Stack>
                  </Column>
                </div>
              </aside>
              <Column className="justify-start pt-[4px] w-[46%]">
                <Column className="justify-start w-[69%]">
                  <Text className="columnrole1" variant="body1">
                    Role
                  </Text>
                  <SelectBox
                    className="font-normal lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_500 tracking-ls1 w-[100%]"
                    placeholderClassName="text-gray_500"
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
                    variant="OutlineIndigo50_1"
                  ></SelectBox>
                </Column>
                <Button
                  className="common-pointer font-medium lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_901 text-center tracking-ls1 w-[100%]"
                  onClick={handleNavigate50}
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

export default EdituserdarkPage;
