$(document).ready(function () {
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: 'outdatedbrowser/lang/en.html'
    });
    var messages = ['generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 25,500 Crafting Metals!', 'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 40,000 Crafting Metals!', 'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 25,000 Crafting Metals!', 'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 2,500 Crafting Metals!', 'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 5,000 Crafting Metals!', 'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gems!', 'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/>15,000 Legend Tokens!', 'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> 50,000 Legend Tokens!', 'generated <img src="img/region-icon.png" style="max-height: 15px;"/>20,000 Apex Coins!', 'generated <img src="img/region-icon.png" style="max-height: 15px;"/> 5,000 Apex Coins!', ];
    changeUpdateMessage();
    var gems_stat = getRandomInt(25432, 123993);
    var elixir_stat = getRandomInt(22561, 172578);
	var third_stat = getRandomInt(6234, 49502);
    $('.coc-coins-stat').text(gems_stat);
    $('.coc-xp-boost-stat').text(elixir_stat);
	$('.coc-xp-third-stat').text(third_stat);
    setInterval(function () {
        gems_stat = gems_stat + getRandomInt(17483, 123993);
        elixir_stat = elixir_stat + getRandomInt(22561, 172578);
		third_stat = third_stat + getRandomInt(6234, 49502);
        $('.coc-coins-stat').fadeOut().text(gems_stat).fadeIn();
        $('.coc-xp-boost-stat').fadeOut().text(elixir_stat).fadeIn();
		$('.coc-xp-third-stat').fadeOut().text(third_stat).fadeIn();
        $('.updates-box .coc-update-msg').animateCSS("fadeOutUp", {
            delay: 0,
            callback: function () {
                $('.updates-box .coc-update-msg').css('visibility', 'hidden');
                changeUpdateMessage();
                $('.updates-box .coc-update-msg').animateCSS("fadeInUp");
            }
        });
    }, getRandomInt(2000, 7000));

    function changeUpdateMessage() {
        var msg = faker.internet.userName() + ' has ' + messages[getRandomInt(0, 9)];
        $('.updates-box .coc-update-msg .message').html(msg);
    }
    $('.video-btn').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        items: {
            src: 'Untitled.mp4'
        }
    });
    $('.generate-btn').on('click', function () {
        if ($('#ccUsername').val() != '') {
            $('.generator-form .cc-username-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function () {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-mode-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function () {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-region-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function () {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-coins-wrap').animateCSS("bounceOutUp", {
                delay: 300,
                callback: function () {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-mass-boost-wrap').animateCSS("bounceOutUp", {
                delay: 300,
                callback: function () {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-xp-boost-wrap').animateCSS("bounceOutUp", {
                delay: 500,
                callback: function () {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-inv-wrap').animateCSS("bounceOutUp", {
                delay: 500,
                callback: function () {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-btn-wrap').animateCSS("bounceOutUp", {
                delay: 700,
                callback: function () {
                    $(this).hide();
                    var vh_height = $(window).width();
                    var new_height = 430;
                    if (vh_height <= 800) {
                        new_height = 680;
                    }
                    $('.generator-form').animate({
                        height: new_height
                    }, "fast", function () {
                        $('.generator-form .step-two').show();
                        $('.generator-form .step-two').flexVerticalCenter({
                            parentSelector: '.generator-form'
                        });
                        $('.generator-form .step-two .loader-wrap').animateCSS("bounceInUp", {
                            delay: 100
                        });
                        $('.generator-form .step-two .loader-msg').animateCSS("bounceInUp", {
                            delay: 100
                        });
                        $('.generator-form .step-two .generator-console').animateCSS("bounceInUp", {
                            delay: 300,
                            callback: function () {
                                startConsoleAnimation(function () {
                                    setTimeout(function () {
                                        console.log('completed.')
                                        $('#humanVerificationModal').modal({
                                            backdrop: 'static',
                                            keyboard: false
                                        });
                                        //                                        setInterval(function () {
                                        //                                            $.get("postback.php", function (data) {
                                        //                                                if (data == 1) {
                                        //                                                    $('#humanVerificationModal').modal('hide');
                                        //                                                    sweetAlert("Success", "Game items have been added, it may take few minutes for it to be visible on your account.", "success");
                                        //                                                }
                                        //                                            });
                                        //                                        }, 2500);
                                    }, 1000);
                                });
                            }
                        });
                    });
                }
            });
        } else {
            sweetAlert("Error", "Please enter you Nickname.", "error");
        }
    });
    $('.survey-offer-link').on('click', function () {
        $('.survey-offers').fadeOut(function () {
            $('.waitng-survey-offers').fadeIn();
        });
    });
    $('.back-to-offers-btn').on('click', function () {
        $('.waitng-survey-offers').fadeOut(function () {
            $('.survey-offers').fadeIn();
        });
    });
    $('.generator-console').on('DOMSubtreeModified', function () {
        $(".generator-console").scrollTop($(".generator-console")[0].scrollHeight);
    });

    function startConsoleAnimation(callback) {
        $('.generator-console').dynatexer({
            loop: 1,
            content: [{
                animation: 'additive',
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-one-shot',
                items: "[root@28.3.4.53.2]$ "
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-by-char',
                items: "open_ssl_connection agar.io -s 28.3.4.53.2 -deobfuscate -encrypt_aes_256"
            }, {
                delay: 200
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nOpening port 423245.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nPort 423245 opened successfully."
            }, {
                animation: 'additive',
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nEncrypting connection: open_ssl_aes256(28.3.4.53.2);\n"
            }, {
                animation: 'replace',
                delay: 10,
                render_strategy: 'iterator',
                placeholder: '<span class="console_text yellow">',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nConnection encrypted successfully."
            }, {
                animation: 'additive',
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-one-shot',
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-by-char',
                items: "import server files /usr/ect/kernel/server/config.json"
            }, {
                delay: 100
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nImporting config.json\n"
            }, {
                animation: 'replace',
                delay: 5,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\n‘config.json’ file has been imported successfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nDe-obfuscating server config files.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nFiles de-obfuscated successfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nDecrypting server configuration files.\n"
            }, {
                animation: 'replace',
                delay: 5,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 30,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nConfigurations files are now imported and readable."
            }, {
                animation: 'additive',
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-one-shot',
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-by-char',
                items: "edit_config -coins " + $('#ccCoins select').val() + " -massBoost " + $('#ccMassBoost select').val() + " -xpBoost " + $('#ccXPBoost select').val() + " -inv " + $('#ccInv select').val()
            }, {
                delay: 70
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nOpen server configurations files in edit mode.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nConfigurations files is now open in edit mode."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nChange Resource X to " + $('#ccCoins select').val() + ".\n"
            }, {
                animation: 'replace',
                delay: 4,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 10,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nResource X changed successfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nChange Resource Y to " + $('#ccMassBoost select').val() + ".\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nResource Z changed successfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nChange resources to " + $('#ccXPBoost select').val() + ".\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nResources changed sucessfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nChange encryption key to " + $('#ccInv select').val() + ".\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\Encryption mechanism added successfully.."
            }, {
                animation: 'additive',
                delay: 3,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nClose configuration file.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 10,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nConfiguration file is now closed."
            }, {
                animation: 'additive',
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-one-shot',
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-by-char',
                items: "save_config -S -v /usr/ect/kernel/sever/config.json"
            }, {
                delay: 80
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nExporting temporary configuration file to main server.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text red">',
                render_strategy: 'text-one-shot',
                items: "\nFailed to export configuration file, bot detected."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nTrying again to export configuration files.\n"
            }, {
                animation: 'replace',
                delay: 4,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text red">',
                render_strategy: 'text-one-shot',
                items: "\nFailed to export configuration file, bot detected."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nTrying one last time to export configuration files.\n"
            }, {
                animation: 'replace',
                delay: 5,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 10,
                placeholder: '<span class="console_text red">',
                render_strategy: 'text-one-shot',
                items: "\nExport failed, anti-human verification system detected potential bot."
            }, {
                animation: 'additive',
                delay: 10,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'text-one-shot',
                items: "\nPlease complete the human verification popup. Make sure the domain you're on is apexlegendshack.xyz"
            }, ],
            cursor: {
                animation: 'replace',
                loop: 'infinite',
                delay: 500,
                placeholder: '<span class="console_cursor">',
                render_strategy: 'array-items',
                items: ['|', '']
            }
        });
        $('.generator-console').dynatexer('play', function () {
            console.log('complete');
            callback();
        });
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var livechat_name = '';
    var livechat_text_area = $('.livechatListArea');
    var livechat_text_list = $('.chatList');
    var livechat_text_area_height = livechat_text_area.height();
    var name_colors = ['#d4a112', '#987c2f', '#b02643', '#d72248', '#9d22d7', '#a65fc7', '#2771bc', '#1a82ed', '#28ba4a', '#136b28', '#9bc716'];
    var chat_names = ['Richard23', 'PHILIP', 'Rob001', 'Hill213', 'Prim', 'Grequod', 'Moseeld30', 'Allichere', 'Munplad60', 'Therainged', 'Perseent', 'Wasice59', 'Arrent', 'Quot1991', 'Yourlenis', 'Doge', 'Obama', 'Putin', 'FUCKER', 'santa', 'Troll', 'Over9000', 'CIA', 'MasterYoda', 'agarmaster', 'ProBro', 'Gandalf', 'TWTClan'];
    var chat_messages = ["Good movie","Awesome movie","Best movie ever","bad ending","Good ending","I did not like the death of that actor","This movie needs an oscar","Very good actors","Baddest movie of the year","Best movie of the year","I watched this movie 2 times","How it's possible to watch a movie before the cinema","Just wow","Thank you for your services","Good quality","bad server","good streaming"];
    setInterval(function () {
        add_livechat_msg(chat_names[getRandomInt(1, chat_names.length - 1)], name_colors[getRandomInt(1, name_colors.length - 1)], chat_messages[getRandomInt(1, chat_messages.length - 1)]);
    }, getRandomInt(1500, 6000));
    $('.livechatSubmtBtn').click(function () {
        if (livechat_name == '') {
            $('.livechatNameBox').show();
        } else {
            add_livechat_msg(livechat_name, '#136b28', $('.livechatMsg').val());
            $('.livechatMsg').val('');
        }
    });
    $('.livechatNicknameBtn').click(function () {
        var name_input = $('#livechat_name');
        if (name_input.val() != '') {
            livechat_name = name_input.val();
            $(this).parents('.livechatNameBox').hide();
        } else {
            sweetAlert("Error", "Please enter a nickname.", "error");
        }
    });
    $(".livechatName").on("keypress", function () {
        console.log("Handler for .keypress() called.");
    });

    function add_livechat_msg(name, color, msg) {
        $(".my_audio").trigger('load');
        var $output_text = $('<li><span class="name" style="color: ' + color + ' !important;">' + name + '</span>: <span class="message">' + msg + '</span></li>');
        $output_text.hide().appendTo(livechat_text_list).fadeIn();
        livechat_text_area.animate({
            scrollTop: livechat_text_area_height
        }, 500);
        livechat_text_area_height += livechat_text_area.height();

    }
    $('.contact-btn').click(function () {
        if ($('#nameInput').val() != "") {
            if ($('#emailInput').val() != "") {
                if ($('#messageInput').val() != "") {
                    sweetAlert("Message Sent!", "Thank you for your feedback.", "success");
                    $('#nameInput, #emailInput, #messageInput').val('');
                } else {
                    sweetAlert("Error", "Please enter your message.", "error");
                }
            } else {
                sweetAlert("Error", "Please enter your email address.", "error");
            }
        } else {
            sweetAlert("Error", "Please enter your nickname.", "error");
        }
    });
});;
$(window).load(function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
    $('.generator-form .cc-username-wrap').animateCSS("bounceInUp", {
        delay: 100
    });
    $('.generator-form .cc-mode-wrap').animateCSS("bounceInUp", {
        delay: 100
    });
    $('.generator-form .cc-region-wrap').animateCSS("bounceInUp", {
        delay: 100
    });
    $('.generator-form .cc-coins-wrap').animateCSS("bounceInUp", {
        delay: 300
    });
    $('.generator-form .cc-mass-boost-wrap').animateCSS("bounceInUp", {
        delay: 300
    });
    $('.generator-form .cc-xp-boost-wrap').animateCSS("bounceInUp", {
        delay: 500
    });
    $('.generator-form .cc-inv-wrap').animateCSS("bounceInUp", {
        delay: 500
    });
    $('.generator-form .cc-btn-wrap').animateCSS("bounceInUp", {
        delay: 700
    });
});
