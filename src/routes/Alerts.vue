<template>
  <div class="alerts">
    <bar-link text="Alerts" icon="fa-bell"></bar-link>
    <div class="content">
      <div v-for="alert in $root.alerts" class="alert" @click="tryDelete(alert)">
        <i class="fa fa-fw fa-bell"></i>
        <p>
          <span class="title">{{ alert.movieTitle }}</span>
          <span class="cinema">{{ alert.cinema }}</span>
        </p>
        <span><span class="small">Starts at</span><br>{{ formatTime(alert.time) }}</span>
      </div>
      <p class="no-alerts" v-if="$root.alerts.length === 0">No alerts to show</p>
      <span class="info">Click an alert to cancel it</span>
    </div>
    <transition name="fade">
      <div class="modal" v-if="modalActive">
        <div class="box">
          <h1>Are you sure you wish to delete the alert?</h1>
          <div class="buttons">
            <button class="button delete" @click="deleteAlert">YES</button>
            <button class="button" @click="modalActive=false">NO</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BarLink from '@/components/BarLink'
import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'Alerts',
  data() {
    return {
      modalActive: false,
      modalAlert: null
    }
  },
  components: {
    BarLink,
    FullSpinner
  },
  methods: {
    formatTime (time) {
      let t = new Date(time)
      return (t.getHours() < 10 ? '0' + t.getHours() : t.getHours()) + ':' + (t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes())
    },
    deleteAlert () {
      this.$root.$emit('delete-alert', this.modalAlert)
      this.modalActive = false
    },
    tryDelete (alert) {
      this.modalActive = true
      this.modalAlert = alert
    }
  },
  mounted () {
    this.$root.$emit('prune-alerts')
  }
}
</script>

<style lang="scss" scoped>
.alerts {
  display: flex;
  flex-direction: column;
  color: white;

  > .content {
    flex: 1;
    display: flex;
    overflow-y: auto;
    flex-direction: column;

    > .no-alerts {
      padding: .5rem;
      text-align: center;
      font-size: 1.5rem;
      font-family: 'Montserrat';
      background-color: rgba(255, 255, 255, .05);
    }

    > .alert {
      display: flex;
      align-items: center;
      padding: .5rem;

      > p {
        display: flex;
        flex-direction: column;
        padding: .25rem .5rem;

        > .title {
          font-size: 1rem;
        }

        > .cinema {
          font-size: .8rem;
          color: rgba(255, 255, 255, .8);
        }
      }

      > span {
        margin-left: auto;
        font-size: 1.2rem;
        padding: .25rem .5rem .5rem .5rem;
        text-align: center;
        background: rgba(255, 255, 255, .1);
        border-radius: 1rem;
        font-weight: bold;

        > .small {
          font-size: .7rem;
          font-weight: 400;
        }
      }

      &:nth-child(even) {
        background-color: rgba(255, 255, 255, .05);
      }
      &:nth-child(odd) {
        background-color: rgba(255, 255, 255, .1);
      }
    }

    > .info {
      text-align: center;
      font-style: italic;
      font-size: .8rem;
      padding: .5rem;
      color: rgba(255, 255, 255, .6);
    }
  }

  > .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > .box {
      background: rgba(255, 255, 255, .1);
      margin: .25rem;
      padding: .75rem;
      border-radius: 5px;

      > h1 {
        font-size: 1rem;
      }

      > .buttons {
        padding: .5rem 0;
        display: flex;
        justify-content: stretch;

        > button {
          flex: 1;

          &.delete {
            background: rgba(255, 20, 50, .9);
          }
        }
      }
    }
  }
}
</style>
