<template>
    <div>
        <div class="card card-box">
            <div class="card-header">
                <div class="card-header--title">
                    <small>Wizards</small>
                    <b>Vertical example</b>
                </div>
                <div class="card-header--actions">
                    <a href="javascript:void(0);" class="btn btn-sm btn-primary" v-b-tooltip title="Dummy button">
                        <font-awesome-icon icon="plus"/>
                    </a>
                </div>
            </div>
            <div id="wizard3">
                <h3>Personal Information</h3>
                <section>
                    <p class="text-black-50 mb-3 mt-1">Try the keyboard navigation by clicking arrow left or right!</p>
                    <div class="p-3">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>
                    </div>
                </section>
                <h3>Billing Information</h3>
                <section>
                    <p class="text-black-50 mb-3 mt-1">Wonderful transition effects.</p>
                    <div class="p-3">
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck">
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
                <h3>Payment Details</h3>
                <section>
                    <p class="text-black-50 mb-3 mt-1">The next and previous buttons help you to navigate through your content.</p>
                    <div class="p-3">
                        <div class="row">
                            <div class="form-group col-12">
                                <input type="text" class="form-control" placeholder="Credit card number">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Name on card">
                            </div>
                            <div class="col-7 col-sm-3 mg-t-20 mg-sm-t-0 d-flex align-items-end">
                                <input type="text" class="form-control" placeholder="Exp. date">
                            </div>
                            <div class="col-5 col-sm-3 mg-t-20 mg-sm-t-0 d-flex align-items-end">
                                <input type="text" class="form-control" placeholder="CVC/CVV">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    </div>
</template>