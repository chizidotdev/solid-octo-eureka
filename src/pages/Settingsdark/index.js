import React from "react";

import { Column, Text, Row, Stack, Img, Button, List } from "components";
import Header1 from "components/Header/Header1";
import { useNavigate } from "react-router-dom";

const SettingsdarkPage = () => {
  const navigate = useNavigate();

  function handleNavigate52() {
    navigate("/usersalldark");
  }
  function handleNavigate53() {
    navigate("/servicesdark");
  }

  return (
    <>
      <Column className="bg-gray_900 font-poppins items-center justify-start mx-[auto] lg:pb-[26px] xl:pb-[32px] 2xl:pb-[37px] 3xl:pb-[44px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Column className="font-inter justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[31%]">
            <Text className="columnsettings1" as="h3" variant="h3">
              Settings
            </Text>
            <Row className="font-poppins items-start justify-between 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[7px] xl:mr-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[98%]">
              <Column className="items-center justify-start 3xl:mt-[118px] lg:mt-[70px] xl:mt-[88px] 2xl:mt-[99px] w-[18%]">
                <Stack className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                  <Img src="images/img_home.svg" className="home" alt="home" />
                </Stack>
                <Stack
                  className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  onClick={handleNavigate52}
                >
                  <Img src="images/img_user.svg" className="home" alt="user" />
                </Stack>
                <Stack
                  className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  onClick={handleNavigate53}
                >
                  <Img src="images/img_grid.svg" className="home" alt="grid" />
                </Stack>
                <Button
                  className="flex lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius50 w-[100%]"
                  size="mdIcn"
                  variant="icbFillBluegray900"
                >
                  <Img
                    src="images/img_settings.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="settings One"
                  />
                </Button>
              </Column>
              <Column className="items-center justify-start w-[65%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listarrowdown1">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="arrowdown"
                      alt="arrowdown"
                    />
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[50%]">
                      <Column className="items-center justify-start w-[94%]">
                        <Text className="title11" as="h5" variant="h5">
                          Appearances
                        </Text>
                      </Column>
                      <Text className="titledesc3" variant="body4">
                        Dark and Light mode
                      </Text>
                    </Column>
                  </Row>
                  <Row className="listarrowdown1">
                    <Img
                      src="images/img_download.svg"
                      className="arrowdown"
                      alt="download"
                    />
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[63%]">
                      <Column className="items-center justify-start w-[69%]">
                        <Text className="title11" as="h5" variant="h5">
                          App Settings
                        </Text>
                      </Column>
                      <Text className="titledesc3" variant="body4">
                        Admin app configurations
                      </Text>
                    </Column>
                  </Row>
                  <Row className="listarrowdown1">
                    <Img
                      src="images/img_arrowdown_2.svg"
                      className="arrowdown"
                      alt="arrowdown One"
                    />
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[59%]">
                      <Column className="items-center justify-start w-[87%]">
                        <Text className="title11" as="h5" variant="h5">
                          Configurations
                        </Text>
                      </Column>
                      <Text className="titledesc3" variant="body4">
                        Main app configurations
                      </Text>
                    </Column>
                  </Row>
                  <Row className="listarrowdown1">
                    <Img
                      src="images/img_arrowdown_3.svg"
                      className="arrowdown"
                      alt="arrowdown Two"
                    />
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[59%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Text className="title11" as="h5" variant="h5">
                          Account Settings
                        </Text>
                      </Column>
                      <Text className="titledesc3" variant="body4">
                        Edit profile information
                      </Text>
                    </Column>
                  </Row>
                  <Row className="listarrowdown1">
                    <Img
                      src="images/img_location_54X42.svg"
                      className="arrowdown"
                      alt="location"
                    />
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] pr-[1px] py-[1px] w-[44%]">
                      <Column className="items-center justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[64%]">
                        <Text className="title11" as="h5" variant="h5">
                          Security
                        </Text>
                      </Column>
                      <Text className="titledesc5" variant="body4">
                        Change Password
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SettingsdarkPage;
