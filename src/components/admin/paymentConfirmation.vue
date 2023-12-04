<template>
  <!-- Iframe for payment redirect -->
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card shadow mb-4">
              <div class="card-body">
                <!-- Payment Status Check -->
                <div v-if="loading && !loadingMorePosts">
                  <!-- Loading spinner or message -->
                  <Spinner />
                </div>
                <div v-else>
                  <div v-if="error">
                    <!-- Error message -->
                    <div>!</div>
                  </div>
                  <div v-else>
                    <!-- Iframe for Payment -->
                    <!-- <iframe
                    ref="myIframe"
                    frameborder="0"
                    allowfullscreen
                    style="position: fixed; left: 0; width: 100%; height: 500px"
                  ></iframe> -->
                    <!-- Payment Status Content -->
                    <div v-if="onePayment.status === '1'">
                      <!-- Successful payment content -->
                      <Image
                        src="/iconscongs.png"
                        alt="congratulation"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div v-else>
                      <!-- Unsuccessful payment content -->
                      <Image
                        src="/iconscancel.png.png"
                        alt="cancel"
                        width="100"
                        height="100"
                      />
                    </div>

                    <Typography variant="h3" component="div">
                      Transaction {{ onePayment.OrderMerchantReference }},
                    </Typography>
                    <Typography :sx="{ mb: 1.5, mt: 2 }" color="text.secondary">
                      {{
                        onePayment.status === "1"
                          ? "We have received your order, and your appointment has been booked successfully, you will be contacted within 24 hours"
                          : "I'm sorry, but your transaction could not be completed."
                      }}
                    </Typography>

                    <CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          @click="
                            onePayment.status === '1'
                              ? redirectToAccounts()
                              : tryAgain()
                          "
                        >
                          {{
                            onePayment.status === "1"
                              ? "View my Appointments"
                              : "Try Again"
                          }}
                        </Button>
                      </CardActions>
                    </CardContent>
                  </div>
                </div>
              </div>
              <!-- End Payment Status Check -->
            </div>
          </div>
        </div>
      </div>

      <div class="flex-grow-1"></div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/partials/Topbar.vue";
import Footer from "@/components/partials/Footer.vue";
import Sidebar from "@/components/partials/Sidebar";
import Breadcrumbs from "@/components/partials/Breadcrumbs";
// import { useQuery, NetworkStatus } from '@apollo/clien
import { VIEW_PAYMENT_COMPLETE_QUERY } from "@/graphql";

export default {
  name: "Appointment Complete",
  components: {
    Sidebar,
    Topbar,
    Footer,
    Breadcrumbs,
  },
  data() {
    return {
      onePayment: [],
      loadingMorePosts: false,
      redirectUrl: "",
    };
  },
  apollo: {
    onePayment: {
      query: VIEW_PAYMENT_COMPLETE_QUERY,
      variables: {
        merchantRef: JSON.parse(localStorage.getItem("appointments"))
          .merchantReference,
        // merchantRef: "6e25d254b7640bf11681319382579",
      },
    },
  },
  methods: {
    redirectToAccounts() {
      this.$router.push("/my-appointments");
    },
    tryAgain() {
      this.$router.push("/member-interests-categories");
    },
    async statusChange() {
      this.servicePricings = [];
      await this.$apollo
        .query({
          query: VIEW_PAYMENT_COMPLETE_QUERY,
          variables: {
            merchantRef: this.redirectUrl,
            // merchantRef: "6e25d254b7640bf11681319382579",
          },
        })
        .then((response) => {
          this.servicePricings = response.data.servicePricings;
        });
    },
  },
  // computed: {
  //   ...useQuery(VIEW_PAYMENT_COMPLETE_QUERY, {
  //     variables: {
  //       merchantRef: this.$route.query.OrderMerchantReference,
  //       // merchantRef: "6e25d254b7640bf11681319382579",
  //     },
  //     notifyOnNetworkStatusChange: true,
  //   }),
  // },
  mounted() {
    this.redirectUrl = JSON.parse(
      localStorage.getItem("appointments")
    ).merchantReference;

    this.statusChange();
  },
};
</script>
