<script>
    jQuery(document).ready(function () {
        //Un sacco di istruzioni interessanti…
        $(".send-comment").click(function () {
            var commentText = $(".comment-text").val();
            var commentContainer = $(".comments-container");
            var commentRow = '<li class="list-group-item"><a href="#" class =badge badge-light>Mario</a>' + commentText + '</li>';

            commentContainer.append(commentRow);


        })

    }
    );
    </script>
    <script>
        jQuery(document).ready(function () {
            //Un sacco di istruzioni interessanti…
            $(".send-comment").click(function () {
                var commentText = $(".comment-text").val();
                var commentContainer = $(".comments-container");
                var commentRow = '<li class="list-group-item"><a href="#" class =badge badge-light>Mario</a>' + commentText + '</li>';

                commentContainer.append(commentRow);


            })

        }
        );
    </script> <!--to create a class useful to append posts-- >
    <script>
        jQuery(document).ready(function () {
            //Un sacco di istruzioni interessanti…
            $(".create-post").click(function () {
                var modalTextTitle = $(".modal-text-title").val();
                var modalTextPost = $(".modal-text-body").val();
                var blogPostContainer = $(".blog-post-container");
                var commentRow = '<li class="list-group-item"><a href="#" class =badge badge-light>Mario</a>' + commentText + '</li>';

                commentContainer.append(commentRow);


            })

        }
        );
    </script>




jQuery(document).ready(function Article(titleText, bodyText) {
    this.titleText = titleText;
    this.bodyText = bodyText;

})