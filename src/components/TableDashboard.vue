<template>
  <div class="card card-box mb-5">
    <div class="card-header pr-2">
      <div class="card-header--title">
        <b-button class="float-right text-capitalize" pill variant="success"
          >registrasi baru</b-button
        >
      </div>
      <!-- <div class="card-header--actions">
        <a
          href="javascript:void(0)"
          class="btn btn-sm text-primary btn-link"
          v-b-tooltip.hover
          title="Refresh"
        >
          <font-awesome-icon spin icon="sync" />
        </a>
      </div> -->
    </div>
    <div class="card-body p-0">
      <div>
        <div class="table-responsive-xs">
          <table class="table table-striped table-hover mb-0">
            <thead class="thead-light">
              <tr class="text-capitalize">
                <th scope="col">no</th>
                <th scope="col">nama pasien</th>
                <th scope="col">dokter</th>
                <th scope="col" class="text-center">no. rekam medik</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="list">
              <tr>
                <td>
                  <div class="align-box-row">
                    <div class="d-flex align-items-center">
                      <span>1</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="align-box-row">
                    <span class="d-block">
                      John Doe
                      <small class="d-block text-black-50"
                        >(john@example.com)</small
                      >
                    </span>
                  </div>
                </td>
                <td>
                  <div class="align-box-row">
                    dr. asd asd asd
                    <!-- <div
                      class="progress-bar-sm progress-bar-animated-alt progress w-100"
                    >
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="33"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 33%;"
                      ></div>
                    </div>
                    <div class="pl-1">
                      100%
                    </div> -->
                  </div>
                </td>
                <td class="status">
                  <div class="text-center">
                    <span class="badge badge-warning">Pending</span>
                  </div>
                </td>
                <td class="text-center" width="5%">
                  <b-dropdown
                    no-caret
                    right
                    variant="link p-0 btn-link-primary"
                    class="text-primary"
                  >
                    <template slot="button-content">
                      <div class="font-size-xl">
                        <font-awesome-icon icon="ellipsis-h" />
                      </div>
                    </template>
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item active>Active action</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                  </b-dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
