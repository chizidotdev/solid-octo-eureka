import React from "react";

import {
  Column,
  Row,
  Text,
  Stack,
  Img,
  List,
  Line,
  Button,
  Switch,
  Input,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const SettingsappsettingsPage = () => {
  const navigate = useNavigate();

  function handleNavigate76() {
    navigate("/settings");
  }
  function handleNavigate77() {
    navigate("/users");
  }
  function handleNavigate78() {
    navigate("/services");
  }
  function handleNavigate79() {
    navigate("/settings");
  }
  function handleNavigate81() {
    navigate("/settingsconfigurations");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-end mx-[auto] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
        <Column className="items-center justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
          <Header className="w-[100%]" />
          <Row className="font-inter items-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
            <Column className="justify-start w-[34%]">
              <Text className="columnsettings" as="h3" variant="h3">
                Settings
              </Text>
              <Row className="font-poppins items-start justify-between 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[7px] xl:mr-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[98%]">
                <Column className="items-center justify-start 3xl:mt-[118px] lg:mt-[70px] xl:mt-[88px] 2xl:mt-[99px] w-[18%]">
                  <Stack className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                    <Img
                      src="images/img_home.svg"
                      className="home"
                      alt="home"
                    />
                  </Stack>
                  <Stack
                    className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    onClick={handleNavigate77}
                  >
                    <Img
                      src="images/img_user.svg"
                      className="home"
                      alt="user"
                    />
                  </Stack>
                  <Stack
                    className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    onClick={handleNavigate78}
                  >
                    <Img
                      src="images/img_grid.svg"
                      className="home"
                      alt="grid"
                    />
                  </Stack>
                  <Stack
                    className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    onClick={handleNavigate79}
                  >
                    <Img
                      src="images/img_settings.svg"
                      className="home"
                      alt="settings One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center justify-start w-[65%]">
                  <List
                    className="common-pointer gap-[0] min-h-[auto] w-[100%]"
                    onClick={handleNavigate81}
                    orientation="vertical"
                  >
                    <Row className="hover:border hover:border-gray_100 hover:border-solid hover:cursor-pointer lg:my-[28px] xl:my-[35px] 2xl:my-[40px] 3xl:my-[48px] hover:shadow-bs2 listarrowdown2">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="arrowdown"
                        alt="arrowdown"
                      />
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[50%]">
                        <Column className="items-center justify-start w-[94%]">
                          <Text className="title6" as="h5" variant="h5">
                            Appearances
                          </Text>
                        </Column>
                        <Text className="titledesc" variant="body4">
                          Dark and Light mode
                        </Text>
                      </Column>
                    </Row>
                    <Row className="hover:border hover:border-gray_100 hover:border-solid hover:cursor-pointer lg:my-[28px] xl:my-[35px] 2xl:my-[40px] 3xl:my-[48px] hover:shadow-bs2 listarrowdown2">
                      <Img
                        src="images/img_download.svg"
                        className="arrowdown"
                        alt="download"
                      />
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[63%]">
                        <Column className="items-center justify-start w-[69%]">
                          <Text className="title8" as="h5" variant="h5">
                            App Settings
                          </Text>
                        </Column>
                        <Text className="titledesc1" variant="body4">
                          Admin app configurations
                        </Text>
                      </Column>
                    </Row>
                    <Row className="hover:border hover:border-gray_100 hover:border-solid hover:cursor-pointer lg:my-[28px] xl:my-[35px] 2xl:my-[40px] 3xl:my-[48px] hover:shadow-bs2 listarrowdown2">
                      <Img
                        src="images/img_arrowdown_54X42.svg"
                        className="arrowdown"
                        alt="arrowdown One"
                      />
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[59%]">
                        <Column className="items-center justify-start w-[87%]">
                          <Text className="title6" as="h5" variant="h5">
                            Configurations
                          </Text>
                        </Column>
                        <Text className="titledesc" variant="body4">
                          Main app configurations
                        </Text>
                      </Column>
                    </Row>
                    <Row className="hover:border hover:border-gray_100 hover:border-solid hover:cursor-pointer lg:my-[28px] xl:my-[35px] 2xl:my-[40px] 3xl:my-[48px] hover:shadow-bs2 listarrowdown2">
                      <Img
                        src="images/img_arrowdown_1.svg"
                        className="arrowdown"
                        alt="arrowdown Two"
                      />
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[59%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Text className="title6" as="h5" variant="h5">
                            Account Settings
                          </Text>
                        </Column>
                        <Text className="titledesc" variant="body4">
                          Edit profile information
                        </Text>
                      </Column>
                    </Row>
                    <Row className="hover:border hover:border-gray_100 hover:border-solid hover:cursor-pointer lg:my-[28px] xl:my-[35px] 2xl:my-[40px] 3xl:my-[48px] hover:shadow-bs2 listarrowdown2">
                      <Img
                        src="images/img_location.svg"
                        className="arrowdown"
                        alt="location"
                      />
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] pr-[1px] py-[1px] w-[44%]">
                        <Column className="items-center justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[64%]">
                          <Text className="title6" as="h5" variant="h5">
                            Security
                          </Text>
                        </Column>
                        <Text className="titledesc2" variant="body4">
                          Change Password
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Row>
            </Column>
            <Line className="bg-gray-300 3xl:h-[1049px] lg:h-[621px] xl:h-[777px] 2xl:h-[874px] lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] w-[1px]" />
            <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[59%]">
              <Text className="columnconfigurations" as="h4" variant="h4">
                App Settings
              </Text>
              <Row className="items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]">
                <Row className="items-center justify-between w-[88%]">
                  <Button
                    className="flex lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] items-center justify-center rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                    size="smIcn"
                    variant="icbFillGray50"
                  >
                    <Img
                      src="images/img_vector.svg"
                      className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
                      alt="Vector"
                    />
                  </Button>
                  <Column className="lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[87%]">
                    <Text
                      className="font-bold text-gray_902 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Dark mode
                    </Text>
                    <Text className="Setdarkmode" variant="body1">
                      Set dark mode
                    </Text>
                  </Column>
                </Row>
                <Switch
                  value={false}
                  className="lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[6%]"
                />
              </Row>
              <Input
                className="common-pointer placeholder:text-gray-300 Buttonsmall"
                wrapClassName="2xl:ml-[595px] 2xl:mt-[168px] 3xl:ml-[714px] 3xl:mt-[201px] flex lg:ml-[423px] lg:mt-[119px] w-[23%] xl:ml-[529px] xl:mt-[149px]"
                onClick={handleNavigate76}
                name="Button"
                placeholder="Done"
                prefix={
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="ml-[0] lg:w-[17px] lg:h-[18px] lg:mr-[24px] xl:w-[21px] xl:h-[22px] xl:mr-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[42px] my-[auto]"
                    alt="checkmark"
                  />
                }
                shape="CircleBorder24"
                size="lg"
                variant="OutlinePurple50"
              ></Input>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SettingsappsettingsPage;
