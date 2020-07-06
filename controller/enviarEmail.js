const UserModel = require("../models/user");
const nodemailer = require("nodemailer");
require("dotenv").config();
const enviarEmail = {
  emailVenta: async (req, res, next) => {
    const { usuario } = req.body;
    const venta = req.venta;
    // sirve para enviar el email con la venta realizada al correo del usuario
    //buscando el email del usuario
    const user = await UserModel.findOne({ _id: usuario });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: " <zerotechnologiessa@gmail.com>", // sender address
      to: user.email, // list of receivers
      subject: "Zerotechnologies", // Subject line
      text: "Compra", // plain text body
      html: `<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">

                                    <td style="background-color: #ecf0f1; text-align: left; padding: 0">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="1280px" height="450px" viewBox="0 0 1280 450" enable-background="new 0 0 1280 450" xml:space="preserve">
                                    <g id="Capa_1" display="none">
                                        <g id="Capa_3" display="inline">
                                            <g>
                                                <path fill="#FFFFFF" d="M1215.621,7.119H30v150.694l43.137-1.021l-8.542,31.965l-10.037,1.243     c-2.762,0.342-14.804,1.799-24.558,2.978v183.664l108.78,66.182l48.571-8.195c69.478-12.127,141.327-21.642,213.467-28.264     l21.207-1.913l8.349-0.628c60.58-4.896,121.854-7.733,182.04-8.431l35.914-0.502c19.758,0.068,36.48,0.456,54.186,0.867     l1.072,0.024l30.592,0.921l30.367,1.392c30.822,1.421,61.93,3.4,92.459,5.885l29.527,2.395l29.719,3.087     c50.35,5.235,101.139,12.002,150.957,20.108l45.912,7.646L1250,337.99V41.423l-35.77,1.462L1215.621,7.119z"/>
                                                <g>
                                                    <path fill="#282828" d="M1141.367,333.075V164.557l-31.26-0.502l-0.406-30.69H886.486l0.098,26.462l-6.918-0.266l-16.996,0.078      l-0.082-26.274H646.557h-38.278H430.505h-37.849H143.909V233.3l35.998-0.874c8.79-0.219,18.09-0.429,26.918-0.634l0.082,21.788      l-30.786,2.89l-0.691,30.947c-0.212,0.027-31.521,3.827-31.521,3.827v46.817l-93.206,28.747l93.206,57.419l41.066-7.026      c70.661-12.332,143.202-21.909,214.619-28.466l21.018-1.917l8.347-0.638c60.746-4.906,122.25-7.786,183.214-8.489l33.738-0.474      v-0.038c21.258,0.048,38.906,0.461,58.1,0.903l30.723,0.921l30.633,1.409c30.916,1.424,62.242,3.413,93.063,5.92l29.568,2.393      l30.082,3.126c50.604,5.26,101.74,12.071,151.979,20.247l39.818,6.488l84.217-60.582L1141.367,333.075z M392.104,293.403      c-7.958,0.646-15.927,1.313-23.909,2.024l0.042-12.372l23.909-1.08L392.104,293.403z M986.66,302.389l-0.242-72.529      c7.941,0.147,15.889,0.298,23.826,0.451l0.137,74.753C1002.477,304.144,994.564,303.251,986.66,302.389z"/>
                                                    <path fill="#282828" d="M1234.574,328.883V57.872l-36.488-0.71l0.225-36.625H932.75l0.115,31.597l-8.232-0.262l-20.219,0.009      l-0.098-31.343H647.303h-45.543H390.26h-45.028H50.703v119.116l42.123-1.037c10.452-0.26,21.17-0.512,31.672-0.756l-0.08,25.921      l-36.715,3.439l-0.16,36.819c-0.256,0.031-36.841,4.552-36.841,4.552v158.216l48.154-8.363      c84.066-14.67,170.016-26.065,254.982-33.864l24.827-2.28l9.843-0.758c72.271-5.837,145.903-9.268,218.436-10.103l40.6-0.562      v-0.046c22.891,0.055,45.783,0.549,68.613,1.073l36.299,1.098l36.316,1.675c36.775,1.693,73.986,4.063,110.656,7.044      l35.143,2.847l35.773,3.722c60.203,6.259,121.035,14.36,180.809,24.082l41.383,6.75l5.957-4.285l-0.139-31.407L1234.574,328.883      z M344.578,211.163c-9.468,0.77-18.951,1.563-28.446,2.408l0.048-14.719l28.444-1.286L344.578,211.163z M1051.926,221.852      l-0.289-86.29c9.447,0.174,18.904,0.354,28.348,0.539l0.16,88.937C1070.744,223.941,1061.328,222.878,1051.926,221.852z"/>
                                                    <g>
                                                        <path fill="#FFFFFF" d="M238.422,98.284c-48.966,0.888-97.917,1.938-146.85,3.15c0-12.246,0-24.489,0-36.736       c85.723,0,171.442,0,257.165,0c-0.075,21.239-0.15,42.478-0.225,63.716c-12.248,0.322-24.496,0.668-36.742,1.031       c-0.038,10.792-0.078,21.582-0.113,32.376c-12.244,0.544-24.484,1.121-36.725,1.727c-0.037,10.982-0.073,21.967-0.111,32.95       c-12.233,0.809-24.469,1.656-36.699,2.545c-0.033,11.195-0.067,22.392-0.101,33.587c-12.224,1.109-24.446,2.271-36.66,3.485       c-0.03,11.428-0.058,22.854-0.087,34.28c49.388-5.997,98.879-10.994,148.439-14.995c-0.039,10.72-0.075,21.439-0.113,32.157       c-86.319,7.925-172.402,19.359-258.028,34.303c0-24.489,0-48.981,0-73.474c12.18-1.517,24.368-2.979,36.561-4.393       c0.009-11.954,0.024-23.907,0.036-35.859c12.202-1.133,24.412-2.223,36.624-3.273c0.022-11.68,0.044-23.36,0.063-35.04       c12.222-0.786,24.448-1.546,36.674-2.271c0.029-11.431,0.055-22.858,0.085-34.287c12.233-0.485,24.469-0.95,36.708-1.395       C238.354,120.674,238.388,109.479,238.422,98.284z"/>
                                                        <path fill="#FFFFFF" d="M605.823,184.498c-49.09,0.322-98.169,1.294-147.223,2.91c-0.061,20.448-0.117,40.9-0.177,61.352       c49.089-2.426,98.217-3.878,147.357-4.363c-0.007,9.983-0.015,19.968-0.022,29.949c-73.745,0.85-147.467,4.244-221.039,10.184       c0.251-73.275,0.503-146.556,0.753-219.83c73.475,0,146.949,0,220.423,0c-0.008,9.982-0.013,19.965-0.02,29.948       c-49.007,0.081-98.014,0.323-147.017,0.729c-0.059,20.452-0.118,40.902-0.177,61.354c49.038-1.209,98.094-1.938,147.154-2.181       C605.834,164.531,605.828,174.515,605.823,184.498z"/>
                                                        <path fill="#FFFFFF" d="M716.307,214.901c0.027,20.026,0.053,40.054,0.078,60.081c-24.578-0.564-49.162-0.848-73.748-0.848       c0-69.813,0-139.624,0-209.438c73.475,0,146.955,0,220.43,0c0.029,10.336,0.061,20.673,0.098,31.009       c12.248,0.121,24.496,0.252,36.744,0.394c0.109,31.406,0.217,62.81,0.324,94.215c-24.512-1.132-49.027-2.1-73.557-2.907       c0.027,10.225,0.061,20.448,0.09,30.676c12.268,0.505,24.531,1.061,36.795,1.667c0.031,10.336,0.066,20.672,0.1,31.01       c12.818,0.656,25.631,1.378,38.443,2.165c0.035,10.578,0.072,21.157,0.109,31.737c-37.338-3.034-74.713-5.411-112.109-7.137       c-0.027-10.135-0.049-20.268-0.076-30.402c-12.275-0.485-24.557-0.91-36.834-1.272c-0.021-10.065-0.039-20.128-0.059-30.191       C740.861,215.356,728.584,215.104,716.307,214.901z M716.15,94.738c0.039,30.04,0.082,60.081,0.117,90.124       c24.543,0.322,49.082,0.808,73.611,1.453c-0.021-10.134-0.047-20.269-0.072-30.403c12.264,0.242,24.525,0.516,36.781,0.816       c-0.057-20.451-0.117-40.902-0.174-61.354C789.662,95.072,752.906,94.858,716.15,94.738z"/>
                                                        <path fill="#FFFFFF" d="M1157.217,315.711c-60.859-9.899-121.939-18.031-183.148-24.396       c-0.037-10.791-0.07-21.581-0.109-32.372c-12.246-1.092-24.492-2.122-36.744-3.093c-0.188-53.097-0.375-106.196-0.563-159.293       c12.248,0.161,24.492,0.332,36.734,0.515c-0.035-10.792-0.07-21.581-0.109-32.373c61.23,0,122.459,0,183.689,0       c0.012,11.952,0.021,23.905,0.033,35.856c12.238,0.284,24.469,0.576,36.705,0.88c0,61.23,0,122.459,0,183.689       c-12.17-1.818-24.344-3.575-36.527-5.271C1157.188,291.804,1157.203,303.756,1157.217,315.711z M1120.291,99.738       c-36.713-0.788-73.438-1.485-110.17-2.092c0.182,54.917,0.365,109.833,0.547,164.749c36.701,3.637,73.352,7.819,109.941,12.548       C1120.504,216.541,1120.398,158.14,1120.291,99.738z"/>
                                                    </g>
                                                    <polyline fill="#282828" points="1109.873,418.588 1234.574,328.883 1227.01,308.431 1186.438,304.956     "/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Capa_2">
                                        <path fill="#FFFFFF" d="M660.672,445H491.723l-6.386,0.152c-0.264,0.008-0.529-0.023-0.792-0.023c-5,0-9.871-1.666-13.847-4.724   l-31.645-24.13c-6.189-4.757-10.054-12.334-9.054-20.028V356h-1.733c-6.883,0-13.051-2.934-17.218-7.771   c-45.488,4.947-90.707,11.385-134.692,19.061l-32.988,5.683c-1.275,0.22-2.558,0.342-3.836,0.342   c-4.187,0-8.318-1.147-11.924-3.372l-73.406-45.258c-1.451-0.757-2.829-1.674-4.104-2.746c-5.134-4.317-8.098-10.68-8.098-17.389   V177.644c0-11.47,8.55-21.141,19.934-22.549c0,0,4.346-0.536,9.702-1.198l0.039-8.997l-6.397,0.158   c-0.186,0.004-0.373,0.006-0.559,0.006c-5.922,0-11.617-2.313-15.866-6.458c-4.383-4.276-6.854-10.14-6.854-16.262V25.682   C142,13.134,152.172,3,164.72,3h684.7c4.158,0,8.055,1.116,11.406,3.066C864.261,4.075,868.187,3,872.226,3h213.009   c6.044,0,11.839,2.39,16.104,6.673c4.264,4.284,6.645,10.081,6.616,16.125l-0.037,7.967l7.296,0.28   C1127.411,34.513,1137,44.537,1137,56.746v217.385c0,6.248-2.514,12.218-7.052,16.51c-1.053,0.996-2.161,1.879-3.363,2.646   l-22.923,19.672c-2.285,3.085-5.326,5.572-8.856,7.181l-67.975,44.903c-3.735,2.467-8.094,3.762-12.52,3.762   c-1.218,0-2.439-0.1-3.657-0.297l-31.782-5.207C944.487,357.705,910,352.914,875,349.024v49.259c0,8.19-4.48,15.367-10.979,19.366   l-36.273,24.6c-3.766,2.561-8.253,3.999-12.804,3.999C814.878,446.248,660.672,445,660.672,445z"/>
                                        <g>
                                            <path fill="#282828" d="M1039,142.322l-24.793,0.446L1014.164,119H835.121l0.074,20.374l-5.55-0.639l-13.632,0.702L815.95,119    H642.665h-30.703H469.366H439.01H240v78.459l28.615-0.699c7.051-0.175,14.385-0.344,21.463-0.51l0.002,17.477l-24.729,2.317    l-0.306,24.826c-0.173,0.022-25.046,3.071-25.046,3.071v37.551l-75.018,23.057l74.626,46.062l32.88-5.639    c56.678-9.891,114.833-17.572,172.117-22.833l16.84-1.537l6.689-0.511c48.726-3.938,99.482-6.248,148.384-6.809l28.481-0.38    v-0.032c16,0.036,29.781,0.369,45.174,0.727l23.936,0.738l24.206,1.13c24.798,1.142,49.753,2.735,74.474,4.748l23.624,1.92    l24.089,2.506c40.593,4.222,81.583,9.681,121.88,16.237l31.931,5.209l70.814-46.917L1039,277.494V142.322z M438.566,245.674    c-6.384,0.516-12.78,1.051-19.179,1.624l0.032-9.927l19.178-0.867L438.566,245.674z M915.469,252.878l-0.192-58.178    c6.369,0.118,12.743,0.238,19.11,0.363l0.107,59.961C928.155,254.286,921.81,253.57,915.469,252.878z"/>
                                            <polygon fill="#282828" points="1097.493,246.603 1071.591,256.33 1062.731,282.347 1085.403,299.168 1114.325,274.131   "/>
                                        </g>
                                        <path fill="#254872" d="M1115,56.746l-29.605-1.468L1085.234,25H872.226l0.092,26.245l-6.603,0.241l-16.219-0.666L849.42,25   H643.263H606.73H437.086h-36.119H164v97.346l34.148-0.832c8.383-0.208,17.161-0.411,25.583-0.606l0.028,20.791l-29.406,2.757   l-0.464,29.536c-0.206,0.025-29.888,3.652-29.888,3.652v126.905l38.984-6.706c67.429-11.768,136.554-20.907,204.704-27.16   l20.007-1.83l7.94-0.61c57.969-4.682,117.826-7.433,176.006-8.103l33.358-0.45v-0.033c16,0.041,35.948,0.435,54.262,0.858   l28.73,0.878l28.941,1.346c29.499,1.357,59.248,3.259,88.662,5.648l28.141,2.281l28.673,2.988   c48.29,5.019,96.862,11.517,144.808,19.319l37.783,6.192v-29.41l30,4.373V56.746z M377.665,169.83l22.813-1.03l-0.036,10.904   c-7.597,0.616-15.202,1.255-22.814,1.935L377.665,169.83z M967.817,188.279l-0.226-69.213c7.572,0.139,15.16,0.283,22.732,0.429   l0.131,71.337C982.913,189.953,975.362,189.1,967.817,188.279z"/>
                                        <g>
                                            <path fill="#FFFFFF" d="M315.292,89.164c-39.274,0.708-78.542,1.552-117.792,2.525c0-9.824,0-19.643,0-29.469    c68.76,0,137.518,0,206.278,0c-0.06,17.04-0.122,34.073-0.18,51.11c-9.827,0.261-19.649,0.533-29.471,0.828    c-0.033,8.654-0.062,17.309-0.09,25.967c-9.823,0.438-19.643,0.899-29.46,1.384c-0.027,8.812-0.058,17.621-0.087,26.429    c-9.814,0.648-19.63,1.332-29.438,2.041c-0.025,8.983-0.056,17.961-0.081,26.943c-9.808,0.893-19.61,1.824-29.408,2.796    c-0.022,9.164-0.044,18.33-0.068,27.499c39.617-4.814,79.312-8.819,119.066-12.029c-0.033,8.596-0.061,17.194-0.091,25.792    c-69.242,6.361-138.288,15.532-206.97,27.519c0-19.646,0-39.293,0-58.939c9.772-1.216,19.547-2.388,29.327-3.523    c0.008-9.586,0.02-19.175,0.029-28.76c9.79-0.911,19.58-1.784,29.375-2.628c0.018-9.368,0.036-18.738,0.056-28.105    c9.8-0.632,19.606-1.242,29.413-1.822c0.022-9.169,0.044-18.334,0.067-27.502c9.813-0.392,19.631-0.764,29.444-1.12    C315.239,107.122,315.266,98.139,315.292,89.164z"/>
                                            <path fill="#FFFFFF" d="M609.991,158.316c-39.374,0.26-78.744,1.037-118.088,2.333c-0.047,16.405-0.097,32.81-0.141,49.215    c39.373-1.946,78.783-3.114,118.198-3.501c-0.008,8.009-0.013,16.016-0.021,24.022c-59.149,0.681-118.287,3.401-177.297,8.167    c0.202-58.774,0.404-117.554,0.606-176.331c58.932,0,117.869,0,176.803,0c-0.005,8.009-0.007,16.016-0.016,24.026    c-39.307,0.063-78.618,0.256-117.923,0.584c-0.047,16.404-0.095,32.809-0.14,49.211c39.332-0.97,78.677-1.554,118.034-1.749    C610.002,142.302,609.996,150.31,609.991,158.316z"/>
                                            <path fill="#FFFFFF" d="M698.615,182.704c0.019,16.062,0.04,32.126,0.063,48.192c-19.717-0.453-39.434-0.683-59.156-0.683    c0-55.998,0-111.996,0-167.993c58.936,0,117.873,0,176.809,0c0.025,8.292,0.054,16.583,0.083,24.873    c9.821,0.1,19.644,0.206,29.47,0.317c0.088,25.191,0.174,50.379,0.261,75.571c-19.663-0.905-39.327-1.682-59.002-2.333    c0.026,8.203,0.051,16.405,0.07,24.607c9.841,0.404,19.678,0.85,29.514,1.338c0.024,8.292,0.057,16.582,0.082,24.874    c10.283,0.526,20.558,1.104,30.835,1.736c0.031,8.485,0.06,16.972,0.089,25.458c-29.945-2.435-59.93-4.341-89.928-5.726    c-0.021-8.128-0.035-16.256-0.058-24.386c-9.848-0.392-19.697-0.731-29.548-1.019c-0.015-8.075-0.03-16.148-0.044-24.219    C718.308,183.07,708.461,182.865,698.615,182.704z M698.486,86.32c0.033,24.094,0.066,48.191,0.098,72.289    c19.685,0.259,39.365,0.648,59.043,1.167c-0.016-8.13-0.039-16.261-0.059-24.389c9.839,0.192,19.673,0.414,29.504,0.656    c-0.043-16.403-0.096-32.807-0.141-49.211C757.452,86.586,727.973,86.416,698.486,86.32z"/>
                                            <path fill="#FFFFFF" d="M1052.275,263.563c-48.817-7.938-97.811-14.462-146.906-19.564c-0.028-8.66-0.06-17.314-0.09-25.972    c-9.82-0.873-19.642-1.697-29.475-2.478c-0.148-42.59-0.299-85.181-0.45-127.772c9.822,0.129,19.646,0.267,29.467,0.412    c-0.028-8.656-0.055-17.311-0.087-25.968c49.112,0,98.228,0,147.341,0c0.008,9.588,0.018,19.177,0.026,28.763    c9.815,0.229,19.627,0.461,29.439,0.706c0,49.114,0,98.225,0,147.342c-9.757-1.46-19.528-2.867-29.295-4.231    C1052.255,244.389,1052.266,253.974,1052.275,263.563z M1022.657,90.328c-29.449-0.632-58.904-1.189-88.367-1.674    c0.145,44.047,0.288,88.099,0.436,132.147c29.438,2.916,58.836,6.27,88.186,10.063    C1022.828,184.021,1022.742,137.174,1022.657,90.328z"/>
                                        </g>
                                        <polyline fill="#282828" points="628.009,314.789 656.125,314.221 642.966,305.133 616.934,305.512  "/>
                                        <g>
                                            <polygon fill="#282828" points="804,344 804,336 773,336 773,314 709,314 709,324 641.31,324 637.495,324 570,324 570,314     465,314 465,370 484,370 484,422 550,422 550,413 555,413 555,422 637.495,422 641.31,422 708.706,422 722.693,422 814,422     814,344   "/>
                                            <polyline fill="#282828" points="484.545,422.375 453.17,398.36 490.013,386 571.812,386 788.184,386 795.958,411.629   "/>
                                            <polyline fill="#282828" points="513.761,420.88 541.203,393.271 759.687,386 828.293,386 851.98,398.368 814.906,423.51   "/>
                                            <polyline fill="#282828" points="550,422 558,422 558,410.26 537.245,411.539   "/>
                                        </g>
                                        <g>
                                            <polygon fill="#254872" points="453,398 453,334 428,334 428,288 538,288 538,334 512,334 512,398   "/>
                                            <polygon fill="#254872" points="545,398 545,385 531,385 531,313 545,313 545,300 630,300 630,313 643,313 643,372 630,372     630,398   "/>
                                            <polygon fill="#254872" points="648,398 648,385 636,385 636,313 648,313 648,300 734,300 734,345 694,345 694,353 734,353     734,398   "/>
                                            <polygon fill="#254872" points="741,398 741,288 799,288 799,313 839,313 839,327 852,327 852,398   "/>
                                        </g>
                                        <path fill="#FFFFFF" d="M522.37,316.926h-26.052v65.139h-26.057v-65.139h-26.059v-13.029h78.168V316.926z"/>
                                        <path fill="#FFFFFF" d="M626.597,356.011h-52.115v13.03h39.085v13.023h-52.113v-13.023H548.43v-39.087h13.024v-13.028h52.113   v13.028h13.029V356.011z M600.541,342.981v-13.027h-26.059v13.027H600.541z"/>
                                        <path fill="#FFFFFF" d="M717.789,382.064h-52.111v-13.023h-13.025v-39.087h13.025v-13.028h52.111v13.028h-39.081v39.087h39.081   V382.064z"/>
                                        <path fill="#FFFFFF" d="M835.043,382.064H808.99v-39.083h-26.056v39.083h-26.061v-78.168h26.061v26.058h39.08v13.027h13.028   V382.064z"/>
                                    </g>
                                    <g id="Capa_3_1_">
                                    </g>
                                    </svg>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="background-color: #ecf0f1">
                                        <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                            <h2 style="color: #e67e22; margin: 0 0 7px">Hola ${user.username}!</h2>
                                            <p style="margin: 2px; font-size: 15px">
                                               Zerotecnologies te agradece por tu compra .<br>
                                                Los productos se van a estar enviando .
                                                Elegiste ${venta.tipoEnvio}<br>
                                                <br>La compra se realizo a nombre de ${venta.nombre} ${venta.apellido}<br>
                                                <br>
                                                El medio de pago elegido fue  ${venta.efectivo}<br>
                                                
                                               Este es el resumen de su compra:</p>
                                            <ul style="font-size: 15px;  margin: 10px 0">
                                                <li>Direccion de envio: 
                                                ${venta.direccion_1}</li>
                                                <li>Pais : ${venta.pais}</li>
                                                <li>Provincia : ${venta.prov}</li>
                                                <li>El numero de contacto es : ${venta.telefono}</li>
                                                <li>El subtotal de la venta es : ${venta.subtotal}</li>
                                                <li>El total de la venta es : ${venta.total}</li>
                                            </ul>
                                          
                                            <div style="width: 100%; text-align: center">
                                                <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="">Ir a la página</a>	
                                            </div>
                                            <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Zerotecnolgias</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>">
                            </a>
                        </td>
                    </tr>
                
                   
                          
                             
                </table>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return res.json({ message: "compra enviada a su email" });
  },
  emailUser: async (req, res, next) => {
    // envia la confirmacion de que se creo el usuario
    const { username, email } = req.body;

    // sirve para enviar el email con la venta realizada al correo del usuario
    //buscando el email del usuario

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zerotechnologiessa@gmail.com",
        pass: "123456789zero",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: " <zerotechnologiessa@gmail.com>", // sender address
      to: email, // list of receivers
      subject: "Zerotechnologies", // Subject line
      text: "Bienvenida", // plain text body
      html: `<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">

                                    <td style="background-color: #ecf0f1; text-align: left; padding: 0">
                                        <a href="">
                                            <img width="20%" style="display:block; margin: 1.5% 3%" src="https://s16.postimg.org/arsbkbzlh/poketrainers.png">
                                        </a>
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td style="padding: 0">
                                        <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="background-color: #ecf0f1">
                                        <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                            <h2 style="color: #e67e22; margin: 0 0 7px">Bienvenido ${username}!</h2>
                                            <p style="margin: 2px; font-size: 15px">
                                               Zerotecnologies te agradece unirte a nuestra pagina .<br>
                                                Tenemos las mejores marcas del mercado.
                                               
                                                
                                               Estamos ubicados en </p>
                                            <ul style="font-size: 15px;  margin: 10px 0">
                                                <li>Direccion : 
                                                <a href="https://g.page/RollingCodeSchool?share"><span>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</span><a></li>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1022202999156!2d-65.20939048495666!3d-26.83670088316041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1593940528858!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                                <li>Nuestro email es : zerotecnoligas@gmail.com</li>
                                               
                                            </ul>
                                          
                                            <div style="width: 100%; text-align: center">
                                                <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="">Ir a la página</a>	
                                            </div>
                                            <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Zerotecnolgias</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>">
                            </a>
                        </td>
                    </tr>
                
                    <tr>
                        <td style="padding: 0">
                            <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="background-color: #ecf0f1">
                            <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                <h2 style="color: #e67e22; margin: 0 0 7px">Hola Poketrainer!</h2>
                                <p style="margin: 2px; font-size: 15px">
                                    Somos la comunidad Poketrainers Trujillo, una comunidad de Pokémon VGC que se encuentra en la ciudad de Trujillo Perú.<br>
                                    Estando próxima la salida de Pokémon Sol y Luna en la comunidad estamos realizando una serie de actividades que nos preparara para su llegada, así que los invitamos a formar parte de la comunidad y a acompañarnos en esta nueva aventura en la región de Alola, donde muchos pokemon y aventuras nos esperan!<br>
                                    Entre las actividades tenemos:</p>
                                <ul style="font-size: 15px;  margin: 10px 0">
                                    <li>Batallas amistosas.</li>
                                    <li>Torneos Oficiales.</li>
                                    <li>Intercambios de Pokémon.</li>
                                    <li>Actividades de integración.</li>
                                    <li>Muchas sorpresas más.</li>
                                </ul>
                                <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/np3e1b7pv/premier.jpg">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/ejzml6toz/banner_hoenn.png">
                                </div>
                                <div style="width: 100%; text-align: center">
                                    <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://www.facebook.com/PokemonTrujillo/">Ir a la página</a>	
                                </div>
                                <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Poketrainers Trujillo 2016</p>
                            </div>
                        </td>
                    </tr>
                </table>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return res.json({ message: "compra enviada a su email" });
  },
  emailPassword: (req, res, next) => {
    // envia una contraseña nueva al correo del usuario
  },
  emailTurno: async (req, res, next) => {
    const turno = req.turno;
    // sirve para enviar el email con la venta realizada al correo del usuario
    const {
      fecha,
      descripcion,
      servicio,
      hora,
      precio,
      marca,
      usuario,
    } = turno;
    const user = await UserModel.findOne({ _id: usuario });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zerotechnologiessa@gmail.com",
        pass: "123456789zero",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: " <zerotechnologiessa@gmail.com>", // sender address
      to: user.email, // list of receivers
      subject: "Zerotechnologies", // Subject line
      text: "Turno solicitado ", // plain text body
      html: `<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">

                                    <td style="background-color: #ecf0f1; text-align: left; padding: 0">
                                        <a href="">
                                            <img width="20%" style="display:block; margin: 1.5% 3%" src="https://s16.postimg.org/arsbkbzlh/poketrainers.png">
                                        </a>
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td style="padding: 0">
                                        <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="background-color: #ecf0f1">
                                        <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                            <h2 style="color: #e67e22; margin: 0 0 7px">Solicitaste un turno zerotecnologias!</h2>
                                            <p style="margin: 2px; font-size: 15px">
                                               Zerotecnologies te avisa que tienes un turno para ${servicio}<br>
                                               <br>
                                                Para nosotros nuestros clientes son los primeros <br>
                                               Este es nuestro contacto y direccion:</p>
                                            <ul style="font-size: 15px;  margin: 10px 0">
                                                <li>Direccion : 
                                                <a href="https://g.page/RollingCodeSchool?share"><span>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</span><a></li>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1022202999156!2d-65.20939048495666!3d-26.83670088316041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1593940528858!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                                <li>Nuestro email es : zerotecnoligas@gmail.com</li>
                                                
                                            </ul>
                                            <br>
                                           Lo esperamos la fecha ${fecha} a horas ${hora} <br>
                                           <br>
                                           Para nosotros nuestros clientes son los primeros <br>
                                            <div style="width: 100%; text-align: center">
                                                <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="">Ir a la página</a>	
                                            </div>
                                            <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Zerotecnolgias</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>">
                            </a>
                        </td>
                    </tr>
                
                    <tr>
                        <td style="padding: 0">
                            <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="background-color: #ecf0f1">
                            <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                <h2 style="color: #e67e22; margin: 0 0 7px">Gracias!</h2>
                                <p style="margin: 2px; font-size: 15px">
                               
                                <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/np3e1b7pv/premier.jpg">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/ejzml6toz/banner_hoenn.png">
                                </div>
                                <div style="width: 100%; text-align: center">
                                    <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="">Ir a la página</a>	
                                </div>
                                <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Zerotecnologias 2020</p>
                            </div>
                        </td>
                    </tr>
                </table>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return res.json({ message: "compra fue enviada  a su email" });
  },
  emailRecordatorio: (res, req, next) => {
    // envia recordatorio del turno un dia antes
  },
};

module.exports = enviarEmail;
