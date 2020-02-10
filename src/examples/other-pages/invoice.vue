<template>
    <div>
        <PageTitle heading="Invoice"
                   subheading="This is an example page that contains an invoice ready for print."/>

        <div class="card card-box">
            <div class="card-body p-4">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <h1 class="display-4 font-weight-bold">
                            Invoice #INV49583
                        </h1>
                        <p class="mb-0 text-black-50">
                            Due on March 12, 2021
                        </p>
                    </div>
                    <div>
                        <a href="javascript:void(0);" class="btn btn-outline-primary">
                            <font-awesome-icon icon="print" class="mr-2" />
                            Print
                        </a>
                        <a href="javascript:void(0);" class="btn btn-outline-primary mx-2">
                            <font-awesome-icon icon="at" class="mr-2" />
                            Email
                        </a>
                        <a href="javascript:void(0);" class="btn btn-primary">
                            <font-awesome-icon icon="handshake" class="mr-2" />
                            Pay
                        </a>
                    </div>
                </div>
                <div class="divider my-3"></div>
                <div class="d-flex justify-content-between mb-5">
                    <div>
                        <div class="text-uppercase text-primary mb-2 font-size-xs">
                            Billed from
                        </div>
                        <p class="mb-1 font-weight-bold">CompanyName, Inc.</p>
                        <p class="text-black-50">
                            201 Something St., Something Town, YT 242, Country 6546
                        </p>
                        <p>
                                    <span class="d-block pb-1">
                                        <b>Tel.:</b>
                                        609-876-0996
                                    </span>
                            <span class="d-block">
                                        <b>Email:</b>
                                        name@company.com
                                    </span>
                        </p>
                    </div>
                    <div class="text-right">
                        <div class="text-uppercase text-primary mb-2 font-size-xs">
                            Invoice no.
                        </div>
                        <h1 class="display-4 opacity-8 text-black-50">
                            #INV49583
                        </h1>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div>
                        <div class="text-uppercase text-primary mb-2 font-size-xs">
                            Billed to
                        </div>
                        <p class="mb-1 font-weight-bold">Maria P Quinn</p>
                        <p class="text-black-50">
                            182  Prospect Street, Camden, New Jersey
                        </p>
                        <p>
                                    <span class="d-block pb-1">
                                        <b>Tel.:</b>
                                        856-718-9505
                                    </span>
                            <span class="d-block">
                                        <b>Email:</b>
                                        rlvs4eizeeo@tstspun.com
                                    </span>
                        </p>
                    </div>
                    <div>
                        <div class="text-uppercase text-primary mb-2 font-size-xs">
                            Invoice information
                        </div>
                        <ul class="list-unstyled">
                            <li class="d-flex justify-content-between pb-1">
                                <span class="pr-4">Invoice Number</span>
                                <span class="pl-4">INV49583</span>
                            </li>
                            <li class="d-flex justify-content-between pb-1">
                                <span class="pr-4">Product ID</span>
                                <span class="pl-4">32456</span>
                            </li>
                            <li class="d-flex justify-content-between pb-1">
                                <span class="pr-4">Issue Date</span>
                                <span class="pl-4">June 14, 2020</span>
                            </li>
                            <li class="d-flex justify-content-between">
                                <span class="pr-4">Due Date</span>
                                <span class="pl-4">March 12, 2021</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="table-responsive my-4">
                    <table class="table table-striped table-hover font-size-xs">
                        <thead>
                        <tr>
                            <th class="wd-20p">Type</th>
                            <th class="wd-40p d-none d-sm-table-cell">Description</th>
                            <th class="tx-center">QTY</th>
                            <th class="tx-right">Unit Price</th>
                            <th class="tx-right">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="tx-nowrap">Software development</td>
                            <td class="d-none d-sm-table-cell text-black-50">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...</td>
                            <td class="tx-center">2</td>
                            <td class="tx-right">$150.00</td>
                            <td class="tx-right">$300.00</td>
                        </tr>
                        <tr>
                            <td class="tx-nowrap">Photoshop design</td>
                            <td class="d-none d-sm-table-cell text-black-50">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</td>
                            <td class="tx-center">1</td>
                            <td class="tx-right">$1,200.00</td>
                            <td class="tx-right">$1,200.00</td>
                        </tr>
                        <tr>
                            <td class="tx-nowrap">Server configuration</td>
                            <td class="d-none d-sm-table-cell text-black-50">Et harum quidem rerum facilis est et expedita distinctio</td>
                            <td class="tx-center">2</td>
                            <td class="tx-right">$850.00</td>
                            <td class="tx-right">$1,700.00</td>
                        </tr>
                        <tr>
                            <td class="tx-nowrap">Build mobile app</td>
                            <td class="d-none d-sm-table-cell text-black-50">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut</td>
                            <td class="tx-center">3</td>
                            <td class="tx-right">$850.00</td>
                            <td class="tx-right">$2,550.00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="divider mb-4"></div>
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <div class="rounded p-3 bg-secondary">
                            <div class="text-uppercase text-primary mb-2 font-size-xs">
                                Notes
                            </div>
                            <p class="font-size-sm mb-0">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul class="list-unstyled mb-3">
                            <li class="d-flex justify-content-between pb-1">
                                <span class="pr-4">Sub-Total</span>
                                <span class="pl-4">$5,750.00</span>
                            </li>
                            <li class="d-flex justify-content-between pb-1">
                                <span class="pr-4">Tax (5%)</span>
                                <span class="pl-4">$287.50</span>
                            </li>
                            <li class="d-flex justify-content-between pb-1">
                                <span class="pr-4">Discount</span>
                                <span class="pl-4">-$50.00</span>
                            </li>
                            <li class="d-flex justify-content-between font-weight-bold pt-3 pb-2 font-size-lg">
                                <span class="pr-4">Total Due</span>
                                <span class="pl-4">$5,987.50</span>
                            </li>
                        </ul>
                        <button class="btn btn-block btn-primary">Pay invoice </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faPrint,
        faAt,
        faHandshake
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    library.add(
        faPrint,
        faAt,
        faHandshake
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            PageTitle
        },
    }
</script>