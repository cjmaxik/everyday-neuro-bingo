<template>
  <q-card>
    <q-toolbar v-show="!isIndex">
      <q-avatar>
        <img src="/assets/images/gymbag.png">
      </q-avatar>

      <q-toolbar-title class="text-center">
        Everyday <span class="text-weight-bold">Neuro</span> Bingo
      </q-toolbar-title>

      <q-btn
        v-close-popup
        flat
        round
        dense
        icon="close"
      />
    </q-toolbar>

    <q-card-section>
      <p>
        New Bingo card every day! <br v-show="$q.screen.lt.sm">Watch Neuro-sama's streams and follow along. Share your
        cards on <a
          ref="noopener noreferrer"
          href="https://discord.gg/neurosama"
          target="_blank"
        >Neurocord</a> in <span class="text-bold">#livestream-chat</span> channel.
      </p>

      <p>
        Brought to you by:
      </p>
      <ul class="text-left">
        <li>
          <a
            ref="noopener noreferrer"
            href="https://cjmaxik.ru"
            target="_blank"
          >CJMAXiK</a> - Lead Developer
        </li>
        <li>
          <a
            ref="noopener noreferrer"
            href="https://discord.com/users/215881919206785024"
            target="_blank"
          >tioopental</a> - Lead Prompt Editor
        </li>
      </ul>

      <p>
        Includes image and audio assets from various community members.<br>Source code - <a
          ref="noopener noreferrer"
          href="https://github.com/cjmaxik/everyday-neuro-bingo"
          target="_blank"
        >GitHub</a>.
      </p>

      <hr v-show="isIndex">

      <p v-show="!isIndex">
        <q-img src="/assets/images/banner.png">
          <div class="absolute-bottom-right text-subtitle2 flex text-center">
            <p>
              <span class="text-bold">Neuro-sama</span> is an AI-powered VTuber created by vedal987. She can
              chat, sing, react to videos, and play games.
            </p>
          </div>
        </q-img>
      </p>

      <p v-show="isIndex">
        <span class="text-gymbag text-bold">Neuro-sama</span> is an AI-powered VTuber created by vedal987. She can chat,
        sing, react to videos, and play games.
      </p>

      <p>
        <q-btn-group spread>
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://www.twitch.tv/vedal987?ref=neuro-bingo"
            label="Twitch"
            no-caps
            style="background-color: #6441a5;"
            target="_blank"
            text-color="white"
          />
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://www.youtube.com/@Neurosama?ref=neuro-bingo"
            label="YouTube"
            no-caps
            style="background-color: #c4302b;"
            target="_blank"
            text-color="white"
          />
        </q-btn-group>

        <q-btn-group spread>
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://twitter.com/NeurosamaAI?ref=neuro-bingo"
            label="@NeurosamaAI"
            no-caps
            style="background-color: #00acee;"
            target="_blank"
            text-color="white"
          />
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://twitter.com/Vedal987?ref=neuro-bingo"
            label="@vedal987"
            no-caps
            style="background-color: #1DA1F2;"
            target="_blank"
            text-color="white"
          />
        </q-btn-group>
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  isIndex: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
