$(document).ready(function() {
    openSeaURL = 'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20';
    // localStorage.setItem('assets', 'asdf');
    assets = JSON.parse(localStorage.getItem('assets'));
    // console.log(assets);
    // ajax call of OpenSea
    if(!assets) {
        // alert('dfsafsda');
        $.ajax({
            url: openSeaURL,
            method: "GET",
            // data:{'id': id, 'status': status},
            // dataType: 'json',
            success: function (data) {
                // console.log(JSON.stringify(data.assets));
                assets = data.assets;
                localStorage.setItem('assets', JSON.stringify(data.assets));
                // renderAssets();
                // if (data.status == 'success') {
                //     $("#helpdesk-change-status_"+id).attr('status', status == 1 ? 0 : 1);
                //     $(".helpdesk-tr-status_"+id).removeClass('helpdesk-tr-color-status_0');
                //     if(status == 1){
                //         $("#helpdesk-change-status_"+id).text('Deactivate');
                //         $(".helpdesk-td-status_"+id).text('Active');
                //     }else{
                //         $("#helpdesk-change-status_"+id).text('Activate');
                //         $(".helpdesk-td-status_"+id).text('Inactive');
                //         $(".helpdesk-tr-status_"+id).addClass('helpdesk-tr-color-status_0');
                //     }
                //     $(".preloader").hide();
                // }
            }
        });
    }else{
        // alert('else');
    }
    
    renderAssets();
    function renderAssets() {
        console.log(assets,121212)
        let imagesHtml = '';
        if(assets) {
            assets.forEach(function (value) {
                // console.log(value);
                // console.log(value.permalink,value.image_preview_url);
                imagesHtml += `<div class="d-item">
                    <div class="nft__item style-2">
                        <div class="author_list_pp">
                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Creator: Nicholas Daniels">
                                <img class="lazy" src="${value.image_thumbnail_url}" alt="">
                                <i class="fa fa-check"></i>
                            </a>
                        </div>
                        <div class="nft__item_wrap">
                            <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                    <button onclick="location.href='03_grey-item-details.html'">Buy
                                        Now</button>
                                    <div class="nft__item_share">
                                        <h4>Share</h4>
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                                            target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                                            target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                        <a
                                            href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i
                                                class="fa fa-envelope fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <a href="${value.permalink}">
                                <img src="${value.image_url}" class="lazy nft__item_preview"
                                    alt="">
                            </a>
                        </div>
                        <div class="nft__item_info">
                            <a href="03_grey-item-details.html">
                                <h4>Green Frogman</h4>
                            </a>
                            <div class="nft__item_click">
                                <span></span>
                            </div>
                            <div class="nft__item_price">
                                0.09 ETH<span>1/25</span>
                            </div>
                            <div class="nft__item_action">
                                <a href="#">Place a bid</a>
                            </div>
                            <div class="nft__item_like">
                                <i class="fa fa-heart"></i><span>76</span>
                            </div>
                        </div>
                    </div>
                </div>`;
            // console.log(imagesHtml)

            });
            // console.log(imagesHtml);
            // load_owl();
            $('#items-carousel').html(imagesHtml);
            // document.getElementById('items-carousel').innerHTML = imagesHtml;
            jQuery("#items-carousel").owlCarousel({
                center: false,
                items:20,
                rewind:true,
                margin:25,
                nav:true,
                navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
                dots:false,
                responsive:{
                    1000:{
                        items:4
                    },
                    600:{
                        items:2
                    },
                    0:{
                        items:1
                    }
                }
             });
        }
        //   for (var key of Object.keys(assets)) {
        //     console.log(key + ": " + assets[key]);
        //   }
        // console.log(assets);
    }
});