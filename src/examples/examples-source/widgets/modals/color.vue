<template>
    <div>
        <b-button variant="dark" class="text-white border-0 bg-strong-bliss" v-b-modal="'modal-bb4'">Strong bliss</b-button>
        <b-modal id="modal-bb4" centered modal-class="modal-dark" title="Modal with gradient background" content-class="bg-strong-bliss">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div slot="modal-footer">
                <b-button variant="link" class="text-white">Close</b-button>
                <b-button variant="second" class="ml-auto">Save changes</b-button>
            </div>
        </b-modal>

        <b-button variant="dark" class="text-white border-0 bg-amy-crisp" v-b-modal="'modal-bb3'">Amy crisp</b-button>
        <b-modal id="modal-bb3" centered modal-class="modal-dark" title="Modal with gradient background" content-class="bg-amy-crisp">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div slot="modal-footer">
                <b-button variant="danger">Yes, I confirm</b-button>
            </div>
        </b-modal>

        <b-button variant="dark" class="text-white border-0 bg-warning" v-b-modal="'modal-bb1'">Warning</b-button>
        <b-modal id="modal-bb1" centered modal-class="modal-dark" title="Modal with gradient background" content-class="bg-warning">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div slot="modal-footer">
                <b-button variant="secondary" class="text-second ml-auto">Save</b-button>
            </div>
        </b-modal>

        <b-button variant="dark" class="text-white border-0 bg-plum-plate" v-b-modal="'modal-bb2'">Plum plate</b-button>
        <b-modal id="modal-bb2" centered modal-class="modal-dark" title="Modal with gradient background" content-class="bg-plum-plate">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div slot="modal-footer">
                <b-button variant="second">Save changes</b-button>
            </div>
        </b-modal>
    </div>
</template>