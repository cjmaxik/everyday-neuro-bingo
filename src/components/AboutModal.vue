<template>
  <q-card>
    <q-toolbar v-show="!isIndex">
      <q-avatar>
        <img src="../assets/gymbag.png">
      </q-avatar>

      <q-toolbar-title>
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
        Created by <a
          ref="noopener noreferrer"
          href="https://cjmaxik.ru"
          target="_blank"
        >CJMAXiK</a> with the help of <a
          ref="noopener noreferrer"
          href="https://discord.gg/neurosama"
          target="_blank"
        >Neurocord</a> and <a
          ref="noopener noreferrer"
          href="https://github.com/cjmaxik/everyday-neuro-bingo/graphs/contributors"
          target="_blank"
        >code contributors</a>. <br v-show="!isIndex">Source code is available <a
          ref="noopener noreferrer"
          href="https://github.com/cjmaxik/everyday-neuro-bingo"
          target="_blank"
        >on GitHub</a>.
      </p>

      <hr v-show="isIndex">

      <p v-show="!isIndex">
        <q-img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/c53ef9e3-0ee3-4253-8a75-e854ceab5129-profile_banner-480.png"
        >
          <div class="absolute-bottom-right  text-subtitle2 flex">
            Neuro-sama is an AI powered VTuber created by vedal987. She can chat, sing, react to videos, and play games.
            The
            VTuber side was made in C# (Unity) but all of the AI is done in Python. Neuro-sama was originally made in 2018
            as a bot that just played osu, but has been revived in December of 2022 as a VTuber.
          </div>
        </q-img>
      </p>

      <p v-show="isIndex">
        Neuro-sama is an AI powered VTuber created by vedal987. She can chat, sing, react to videos, and play games.
        The
        VTuber side was made in C# (Unity) but all of the AI is done in Python. Neuro-sama was originally made in 2018
        as a bot that just played osu, but has been revived in December of 2022 as a VTuber.
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
